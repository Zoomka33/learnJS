$.popUp = function () {
    let popUp = document.querySelector('.pop-up'),
        popupOverlay = document.querySelector('.pop-up__overlay'),
        popupOpen = document.querySelector('.pop-up__button'),
        popupClose = document.querySelector('.pop-up__close');

    popupOpen.onclick = () => {
        popUp.style.display = 'block';

    };

    popupClose.onclick = () => {
        popUp.style.display = 'none';

    };

    window.onclick = (e) => {
        if (e.target == popupOverlay) {
            popUp.style.display = 'none';

        };
    };
};