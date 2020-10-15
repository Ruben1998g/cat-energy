var catBefore = document.querySelector(".cat-before");
var catAfter = document.querySelector(".cat-after");

var catPictureBefore = document.querySelector(".exemple__img-before");
var catPictureAfter = document.querySelector(".exemple__img-after");

var exempleCheck = document.querySelector(".exemple__check");

var open = document.querySelector(".main-nav__open");
var close = document.querySelector(".main-nav__close");

var noJs = document.querySelector(".main-nav--nojs");

var menu = document.querySelector(".main-nav__menu");


noJs.classList.remove("main-nav--nojs");
open.classList.remove("main-mav-button-hidden");


open.addEventListener("click", function(){
	open.classList.add("main-mav-button-hidden");
	close.classList.remove("main-mav-button-hidden");

	menu.classList.add("main-nav-show");
});

close.addEventListener("click", function(){
	open.classList.remove("main-mav-button-hidden");
	close.classList.add("main-mav-button-hidden");

	menu.classList.remove("main-nav-show");
});




catBefore.addEventListener("click", function(){
	if(catPictureBefore.classList.contains("cat-none")){
		catPictureAfter.classList.add("cat-none");
		catPictureBefore.classList.remove("cat-none");

		exempleCheck.classList.add("animation-before");

		exempleCheck.classList.remove("animation-after");

	}
});

catAfter.addEventListener("click", function(){
	if(catPictureAfter.classList.contains("cat-none")){
		catPictureBefore.classList.add("cat-none");
		catPictureAfter.classList.remove("cat-none");

		exempleCheck.classList.add("animation-after");

		exempleCheck.classList.remove("animation-before");

	}
});