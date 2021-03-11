document.querySelector('.c-burger__menu').addEventListener('click', function(e){
	e.preventDefault();
	// this.classList.toggle('is-active');
	if(this.classList.contains('is-active')){
		this.classList.remove('is-active');
		document.querySelector('#burger').classList.remove('nav-active');
		document.querySelector('.burger__menu').classList.remove('b__is-active');
	}else{
		this.classList.add('is-active');
		document.querySelector('#burger').classList.add('nav-active');
		document.querySelector('.burger__menu').classList.add('b__is-active');
	}
});
// обрезка текста
function cut() {

	const cropElement = document.querySelectorAll('.services__item-discription');
	console.log(cropElement);// выбор элементов
	const size = 150;                                            // кол-во символов
	const endCharacter = '...';                                  // окончание

	cropElement.forEach(el => {
		let text = el.innerHTML;

		if (el.innerHTML.length > size) {
			text = text.substr(0, size);
			el.innerHTML = text + endCharacter;
		}
	});
}
cut();


//слайдер old
// let offset = 0;
// const sliderNews= document.querySelector('.news__block');
// document.querySelector('.news__slider-btn__next').addEventListener('click', function(){
// 	offset = offset + 300;
// 	if (offset>900) {
// 		offset = 0;
// 	}
// 	sliderNews.style.left = -offset + 'px';
// });
//
//
// document.querySelector('.news__slider-btn__prev').addEventListener('click', function(){
// 	offset = offset - 300;
// 	if (offset<0) {
// 		offset = 900;
// 	}
// 	sliderNews.style.left = -offset + 'px';
// });








//блок с картинками
const planBlock = document.querySelector('.plan__block');
planBlock.addEventListener('click',showInfo);
function showInfo(event){
	// console.dir(event.target);
	const key = event.target.dataset['key'];
	console.log(key);
	if (key === undefined){
		return true;
	}else{
		document.querySelector('.plan__'+key).classList.add('p__active');
	}
	document.querySelector('.plan__pointer').style.display ='none';
}



