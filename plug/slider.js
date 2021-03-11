$.slider = function() {
    const images = document.querySelectorAll('.news__slider .news__block .news__item');
    const slider = document.querySelector('.news__block');
    let count = 0;
    let width;
    const mediaWidth425 = window.matchMedia('(max-width: 425px)');

    function init() {
        width = document.querySelector('.news__slider').offsetWidth;
        console.log('resize');
        slider.style.width = width * 2 + 'px';
        images.forEach(item => {
            item.style.width = width / 3 + 'px';
            item.style.height = 'auto';
        });
    }

    if (!mediaWidth425.matches) {
        window.addEventListener('resize', init);
        init();
    } else {

    }


    document.querySelector('.news__slider-btn__prev').addEventListener('click', function () {
        count--;
        if (count < 0) {
            count = images.length - 3;
        }
        rollSlider();
    });

    document.querySelector('.news__slider-btn__next').addEventListener('click', function () {
        count++;
        if (count >= images.length - 2) {
            count = 0;
        }
        rollSlider();
    });

    function rollSlider() {
        slider.style.transform = 'translate(-' + count * width / 3 + 'px)';
    }
}