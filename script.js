const pictureLeft = document.querySelector('.section__bottom--container-p1');
const pictureCenter = document.querySelector('.section__bottom--container-p2');
const pictureRight = document.querySelector('.section__bottom--container-p3');

const arrowLeft = document.querySelector('.left');
const arrowRight = document.querySelector('.right');

let index = 2;

arrowLeft.addEventListener('click', () => {
    index--;
    index = (index + 5) % 5;
    pictureLeft.style.backgroundImage = `url(./assets/image-slide-${(index % 5) + 1}.jpg)`;
    pictureCenter.style.backgroundImage = `url(./assets/image-slide-${(index + 1) % 5 + 1}.jpg)`;
    pictureRight.style.backgroundImage = `url(./assets/image-slide-${(index + 2) % 5 + 1}.jpg)`;
});

arrowRight.addEventListener('click', () => {
    index++;
    index = index % 5;
    pictureLeft.style.backgroundImage = `url(./assets/image-slide-${index % 5 + 1}.jpg)`;
    pictureCenter.style.backgroundImage = `url(./assets/image-slide-${(index + 1) % 5 + 1}.jpg)`;
    pictureRight.style.backgroundImage = `url(./assets/image-slide-${(index + 2) % 5 + 1}.jpg)`;
});
