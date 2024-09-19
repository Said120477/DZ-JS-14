// Создайте web-страницу, на которой расположен ползунок и
// два квадрата под ним на противоположных сторонах страницы.
// При переключении ползунка должен меняться цвет фона
// страницы и положение квадратов.

const slider = document.getElementById('slider');
const kub1 = document.getElementById('kub1');
const kub2 = document.getElementById('kub2');

slider.addEventListener('input', () => {
    const value = slider.value;
    const color = `rgb(${500 - value}, ${value}, ${500 - value})`;

    document.body.style.backgroundColor = color;
    kub1.style.marginLeft = `${value}px`;
    kub2.style.marginRight = `${value}px`;
});