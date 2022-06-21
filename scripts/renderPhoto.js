import { createElem } from "./createElem.js";

export const renderPhoto = (photoWrapper, photo) => {
    console.log(photo);

    const img = createElem('IMG', {
        className: 'photo__picture',
        src: photo.urls.regular,
        alt: photo.description || photo.alt_description,
        style: "max-height: 80vh;"
    });

    const author = createElem('A', {
        className: 'photo__author',
        href: photo.user.links.html
    });

    const avatarAuthor = createElem('IMG', {
        src: photo.user.profile_image.small,
        alt: photo.user.bio,
        title: photo.user.username
    });

    const userName = createElem('SPAN', {
        textContent: photo.user.name
    });

    const photoControl = createElem('DIV', {
        className: 'photo__control'
    });

    const photoLike = createElem('BUTTON', {
        className: 'photo__like',
        id: photo.id,
        textContent: photo.likes,
        likeByUser: photo.liked_by_user
    });

    if (!photoLike.likeByUser) {
        photoLike.classList.add('photo__like_o');
    }

    const photoDownload = createElem('A', {
        className: 'photo__download',
        download: true,
        href: photo.links.download,
        target: "_blank"
    });

    author.append(avatarAuthor, userName);
    photoControl.append(photoLike, photoDownload);
    photoWrapper.append(img, author, photoControl);

    return photoLike;

};

/*

        <div class="photo__control">
            <button id="JIqH1ps4eK8" class="photo__like">30</button>
            <a class="photo__download" download="true"
                        href="https://unsplash.com/photos/JIqH1ps4eK8/download?ixid=MnwzMDE0MzF8MHwxfGFsbHx8fHx8fHx8fDE2NTQ1MjMzNjE"
                        target="_blank">
            </a>
        </div>

*/