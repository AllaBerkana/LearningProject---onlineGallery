import { API_URL_PHOTOS } from "./consts.js";
import { renderPhoto } from "./renderPhoto.js";

// const toggleLike = (data) => {
//     if (data.photo.liked_by_user){
//         photoLike.classList.remove('photo__like_o');
//     } else {
//         photoLike.classList.add('photo__like_o');
//     }

//     photoLike.likedByUser = data.photo.liked_by_user;
//     photo.textContent = data.photo.likes;
// };

export const handlerLike = (photoLike) => {

    const toggleLike = (data) => {
        if (data.photo.liked_by_user) {
            photoLike.classList.remove('photo__like_o');
        } else {
            photoLike.classList.add('photo__like_o');
        }

        photoLike.likedByUser = data.photo.liked_by_user;
        photoLike.textContent = data.photo.likes;
    };

    const url = new URL(`${API_URL_PHOTOS}/${photoLike.id}/like`);

    fetch(url, {
        method: photoLike.likedByUser ? 'DELETE' : 'POST',
        headers: {
            Authorization: `Bearer ${localStorage.getItem('Bearer')}`
        },
    })
        .then((response) => response.json())
        .then(toggleLike);
};