
$.cut = function(biba, num){

    const cropElement = document.querySelectorAll(biba);
    console.log(cropElement);// выбор элементов
    const size = num;                                            // кол-во символов
    const endCharacter = '...';                                  // окончание

    cropElement.forEach(el => {
        let text = el.innerHTML;

        if (el.innerHTML.length > size) {
            text = text.substr(0, size);
            el.innerHTML = text + endCharacter;
        }
    });
};