const menu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

// function
function onClick() {
	menu.classList.toggle('change');
}

function disappear() {
	mobileMenu.style.transform = 'translateX(100%)';
}

function appear() {
	mobileMenu.style.transform = 'translateX(0)';
}

// event listener
menu.addEventListener('click', onClick);
menu.addEventListener('click', appear);
menu.addEventListener('click', disappear);
