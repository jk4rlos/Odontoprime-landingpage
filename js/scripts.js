window.onscroll = function () {
	scrollFunction();
	scrollFunctionBTT();
};

window.onload = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.documentElement.scrollTop > 30) {
		document.getElementById("navbarExample").classList.add("top-nav-collapse");
	} else if (document.documentElement.scrollTop < 30) {
		document.getElementById("navbarExample").classList.remove("top-nav-collapse");
	}
}

let elements = document.querySelectorAll(".nav-link:not(.dropdown-toggle)");

for (let i = 0; i < elements.length; i++) {
	elements[i].addEventListener("click", () => {
		document.querySelector(".offcanvas-collapse").classList.toggle("open");
	});
}

document.querySelector(".navbar-toggler").addEventListener("click", () => {
	document.querySelector(".offcanvas-collapse").classList.toggle("open");
});

function toggleDropdown(e) {
	const _d = e.target.closest(".dropdown");
	let _m = document.querySelector(".dropdown-menu", _d);

	setTimeout(
		function () {
			const shouldOpen = _d.matches(":hover");
			_m.classList.toggle("show", shouldOpen);
			_d.classList.toggle("show", shouldOpen);

			_d.setAttribute("aria-expanded", shouldOpen);
		},
		e.type === "mouseleave" ? 300 : 0
	);
}

const dropdownCheck = document.querySelector('.dropdown');

if (dropdownCheck !== null) {
	document.querySelector(".dropdown").addEventListener("mouseleave", toggleDropdown);
	document.querySelector(".dropdown").addEventListener("mouseover", toggleDropdown);

	document.querySelector(".dropdown").addEventListener("click", (e) => {
		const _d = e.target.closest(".dropdown");
		let _m = document.querySelector(".dropdown-menu", _d);
		if (_d.classList.contains("show")) {
			_m.classList.remove("show");
			_d.classList.remove("show");
		} else {
			_m.classList.add("show");
			_d.classList.add("show");
		}
	});
}

var cardSlider = new Swiper('.card-slider', {
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});

var imageSlider = new Swiper('.image-slider', {
	autoplay: {
		delay: 3000,
		disableOnInteraction: false
	},
	loop: true,
	spaceBetween: 50,
	slidesPerView: 5,
	breakpoints: {
		575: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		767: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		1199: {
			slidesPerView: 4,
			spaceBetween: 20
		},
	}
});

myButton = document.getElementById("myBtn");

function scrollFunctionBTT() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		myButton.style.display = "block";
	} else {
		myButton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
