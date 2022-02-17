$(function(){

// ..........................Main-slider............................

	$('.banner-slider').slick({
		infinite: true,
		autoplay: true,
		dots: true
	});

// ...........................CounterUp.............................

	$(".counter").counterUp({
		delay: 10,
		time: 400,
	});

// ............................Scroll...............................

	$('a.link').click(function(){
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
		},800);
	});

});

// ............................Mob-menu.............................

const burger = document.querySelector('.burger-button');
const navigation = document.querySelector('.header__navigation');
const close = document.querySelector('.close-button');
const navLink = document.querySelectorAll('.main-navigation__link');

	burger.addEventListener('click', function() {
		navigation.classList.add('active');
		document.body.style.overflow = 'hidden';
	});

	close.addEventListener('click', function() {
		navigation.classList.remove('active');
		document.body.style.overflow = '';
	});

	navLink.forEach(item => {
		item.addEventListener('click', function() {
			navigation.classList.remove('active');
			document.body.style.overflow = '';
		});
	});

// ......................For transform header........................

let lastScroll = 0;
const defaultOffset = 150;
const header = document.querySelector('.header');

const scrollPosition = function() {
	return window.pageYOffset || document.documentElement.scrollTop;
};

const containHeight = function() {
	return header.classList.contains('hide');
};

window.addEventListener('scroll', function() {
	if (scrollPosition() > lastScroll && !containHeight() && scrollPosition() > defaultOffset) {
		header.classList.add('hide');
	} else if (scrollPosition() < lastScroll && containHeight()) {
		header.classList.remove('hide');	
	}

	if (scrollPosition() > 350) {
		header.classList.add('transform');
	} else {
		header.classList.remove('transform');
	}

	lastScroll = scrollPosition();
});

//.............................Copiright.............................	

	let date = new Date();
	let copy = document.querySelector('.copy-date').innerHTML = date.getFullYear();