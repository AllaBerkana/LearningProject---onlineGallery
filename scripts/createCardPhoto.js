import { createElem } from "./createElem.js";

const loadImg = (url, description) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.width = '200';
        img.src = url;
        img.alt = description;
        img.addEventListener('load', () => {
            resolve(img);
        });
        img.addEventListener('err', () => {
            reject(new Error(err));
        });
    });
};

export const createCardPhoto = async (data) => {

    const card = createElem('LI', {
        className: 'card'
    });

    /*
    const cardItem = document.createElement('A');
    cardItem.className = 'grid-item';
    cardItem.id = data.id;
    cardItem.href = `page.html?photo=${data.id}`
    */

    const cardItem = createElem('A', {
        className: 'grid-item',
        id: data.id,
        href: `page.html?photo=${data.id}`
    });


    const photo = await loadImg(data.urls.small, data.alt_description)

    const author = createElem('A', {
        className: 'card__author',
        href: data.user.links.html
    });

    const avatarAuthor = new Image();
    avatarAuthor.className = 'author__photo';
    avatarAuthor.src = data.user.profile_image.medium;
    avatarAuthor.width = '32';
    avatarAuthor.height = '32';
    avatarAuthor.alt = data.user.bio;
    avatarAuthor.title = data.user.username;

    const likeBtn = createElem('BUTTON', {
        className: 'card__photo-like',
        textContent: data.likes
    });


    const downloadLink = createElem('A', {
        className: 'card__download',
        href: data.links.download,
        download: true,
        target: '_blank'
    });


    author.append(avatarAuthor);
    cardItem.append(photo, author, likeBtn, downloadLink);
    card.append(cardItem);

    /*
    card.innerHTML = `
        <a id="${data.id}" class="grid-item" href="page.html?photo=BZnPqlIl5pk">
            <img width="200" src="https://images.unsplash.com/photo-1654507666453-ec3e281b146c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=MnwzMDE0MzF8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1NDUyMzcxMA&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=400" alt="null">
            <a class="card__author" href="#">
                <img class="author__photo" src="https://images.unsplash.com/profile-1639410901867-5932bcc818ccimage?ixlib=rb-1.2.1&amp;crop=faces&amp;fit=crop&amp;w=32&amp;h=32" width="32" height="32" role="presentation" alt="I mainly do editorial shoots, but always with human elements. I believe that adding a human element to an art concept is the most organic way to represent our touch in the world." title="Chandri Anggara">
            </a>
            <button class="card__photo-like">2</button>
            <a class="card__download" href="https://unsplash.com/photos/BZnPqlIl5pk/download?ixid=MnwzMDE0MzF8MHwxfGFsbHw4fHx8fHx8Mnx8MTY1NDUyMzcxMA" download="" target="_blank"></a>
        </a>
    `
    */

    return card;

};