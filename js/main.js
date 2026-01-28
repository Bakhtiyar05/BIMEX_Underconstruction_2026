/* WhatsApp & Phone Number Start */

const popup = document.querySelector('.contact_Us_PopUp');
const hoverIcon = popup.querySelector('.contact_Us_PopUp_HoverIcon');
const boxs = popup.querySelector('.contact_Us_Boxs');

boxs.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
boxs.style.opacity = '0';
boxs.style.transform = 'translateY(10px)';
boxs.style.pointerEvents = 'none';

let isVisible = false;

function showBox() {
    boxs.style.opacity = '1';
    boxs.style.transform = 'translateY(0)';
    boxs.style.pointerEvents = 'auto';
    isVisible = true;
}

function hideBox() {
    boxs.style.opacity = '0';
    boxs.style.transform = 'translateY(10px)';
    boxs.style.pointerEvents = 'none';
    isVisible = false;
}

hoverIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    if (isVisible) {
        hideBox();
    } else {
        showBox();
    }
});

document.addEventListener('click', (e) => {
    if (!popup.contains(e.target)) {
        hideBox();
    }
});

/* WhatsApp & Phone Number Ennd */


/* Navbar */

const menu = document.querySelector(".menu");
const menuInner = menu.querySelector(".menu__inner");
const menuArrow = menu.querySelector(".menu__arrow");
const menuTitle = menu.querySelector(".menu__title");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");

function toggleMenu() {
    menu.classList.toggle("is-active");
    overlay.classList.toggle("is-active");
}

function showSubMenu(children) {
    subMenu = children.querySelector(".submenu");
    subMenu.classList.add("is-active");
    subMenu.style.animation = "slideLeft 0.35s ease forwards";
    const menuTitle = children.querySelector("i").parentNode.childNodes[0]
        .textContent;
    menu.querySelector(".menu__title").textContent = menuTitle;
    menu.querySelector(".menu__header").classList.add("is-active");
}

function hideSubMenu() {
    subMenu.style.animation = "slideRight 0.35s ease forwards";
    setTimeout(() => {
        subMenu.classList.remove("is-active");
    }, 300);

    menu.querySelector(".menu__title").textContent = "";
    menu.querySelector(".menu__header").classList.remove("is-active");
}

function toggleSubMenu(e) {
    if (!menu.classList.contains("is-active")) {
        return;
    }
    if (e.target.closest(".menu__dropdown")) {
        const children = e.target.closest(".menu__dropdown");
        showSubMenu(children);
    }
}

window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
        if (menu.classList.contains("is-active")) {
        toggleMenu();
        }
    }
});



/* Navbar hide on scroll Start */

let lastScrollY = window.scrollY;
const header = document.querySelector("header");
const filter_Scrolly = document.getElementById("filteredScroll");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    /* 🔒 iOS FIX: top-dayıqsa navbar həmişə görünsün */
    if (currentScroll <= 5) {
        header.style.top = "0px";
        filter_Scrolly.style.top = "70px";
        lastScrollY = 0;
        return;
    }

    /* Scroll aşağı */
    if (currentScroll > lastScrollY) {
        header.style.top = "-80px";
        filter_Scrolly.style.top = "10px";
    }
    /* Scroll yuxarı */
    else {
        header.style.top = "0px";
        filter_Scrolly.style.top = "70px";
    }

    header.style.transition = "top .3s ease";
    filter_Scrolly.style.transition = "top .3s ease";

    lastScrollY = currentScroll;
}, { passive: true });

/* Navbar hide on scroll End */


/* Products Filter Button Start */

window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    
    if (window.scrollY > 150) {
        header.classList.add("scrolled");
        header.style.transition = "1s";
    } else {
        header.classList.remove("scrolled");
        header.style.transition = "1s";
    }

    lastScrollY = window.scrollY;
});

/* Products Filter Button End */


/* 
(function () {
    let darkMode = localStorage.getItem("darkMode");
    const darkSwitch = document.getElementById("switch");

    const enableDarkMode = () => {
        document.body.classList.add("darkmode");
        localStorage.setItem("darkMode", "enabled");
    };

        const disableDarkMode = () => {
        document.body.classList.remove("darkmode");
        localStorage.setItem("darkMode", null);
    };

    if (darkMode === "enabled") {
        enableDarkMode();
    }

    darkSwitch.addEventListener("click", () => {
        darkMode = localStorage.getItem("darkMode");
        if (darkMode !== "enabled") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
})(); */

burger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
menuArrow.addEventListener("click", hideSubMenu);
menuTitle.addEventListener("click", hideSubMenu);
menuInner.addEventListener("click", toggleSubMenu);

/* Navbar End */


/* Banner carousel start */

$(document).ready(function () {
    let SwiperSliderTwo = new Swiper(".cs-slider", {
        loop: true,
        autoplay: {
            delay: 3000
        },
            effect: "fade",
            autoHeight: true,
            speed: 2500,
            slidesPerView: 1,
            spaceBetween: 35,
        // mousewheel: true,
        // centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true
        }
    });
});

/* Banner carousel end */


/* best_Sellers_Slider Start */

$(document).ready(function(){
    $('.best_Sellers_Slider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,   
        centerMode: true,
        centerPadding: '0px',
        centeredSlides: true,
        cssEase: 'ease',
        responsive: [
            {
                breakpoint: 1288,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                
                }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    });
});

/* best_Sellers_Slider End */


/* dorne_Cards_First_Slider Start */

$(document).ready(function(){
    $('.dorne_Cards_First_Slider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,   
        centerMode: true,
        centerPadding: '0px',
        centeredSlides: true,
        cssEase: 'ease',
        responsive: [
            {
                breakpoint: 1288,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                
                }
            },
            {
                breakpoint: 567,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                
                }
            }
        ]
    });
});

/* dorne_Cards_First_Slider End */


/* testimonials_Slider Start */

$(document).ready(function(){
    $('.testimonials_Slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,   
        centerMode: true,
        centerPadding: '0px',
        centeredSlides: true,
        cssEase: 'ease',
        responsive: [
            {
                breakpoint: 1288,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                
                }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    });
});

/* testimonials_Slider End */


/* Language DropDown Start */

document.querySelectorAll('.language_box').forEach(box => {

    const dropdown = box.querySelector('.language_dropdown');
    const selectedLang = box.querySelector('.selectedLang');
    const langText = box.querySelector('.lang_text');
    const langButtons = box.querySelectorAll('.language_menu button');

    selectedLang.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            langText.innerHTML = btn.textContent;
            dropdown.classList.remove('active');
        });
    });

    document.addEventListener('click', e => {
        if (!box.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });

});


/* Language DropDown End */



/* Counter Info Start */

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter-value');

    const animateCount = (el, target, duration = 1600) => {
        const start = 0;
        const startTime = performance.now();

        const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = easeOutCubic(progress);
        const current = '+' + Math.floor(eased * (target - start) + start);
        
        el.textContent = formatNumber(current, target);
            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = '+' + formatNumber(target, target);
            }
        };

        requestAnimationFrame(step);
    };

    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    function formatNumber(num, target) {
        if (target >= 1000) {
            return num.toLocaleString();
        }
        return num;
    }

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                
                if (!el.dataset.animated) {
                    const target = parseInt(el.dataset.target, 10) || 0;
                    const duration = Math.max(900, Math.min(2500, target * 3));
                    animateCount(el, target, duration);
                    el.dataset.animated = 'true';
                }
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(c => observer.observe(c));
});

/* Counter Info End */





/* Video FullScreen PopUp Start */

const watchBtn = document.querySelector('.watch_Video_Play_Btn');
const videoPopUp = document.querySelector('.video-popup');
const closePopup = document.querySelector('.close-popup');

watchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    videoPopUp.classList.add('active');
    const video = videoPopUp.querySelector('video');
    video.currentTime = 0;
    video.play();
});

closePopup.addEventListener('click', () => {
    videoPopUp.classList.remove('active');
    const video = videoPopUp.querySelector('video');
    video.pause();
});

videoPopUp.addEventListener('click', (e) => {
    if (e.target === videoPopUp) {
        videoPopUp.classList.remove('active');
        const video = videoPopUp.querySelector('video');
        video.pause();
    }
});

/* Video FullScreen PopUp End */


ScrollOut({
  cssProps: {
    visibleY: true,
    viewportY: true
  }
});

Splitting({ target: '.heading' });






/* Hero-Section Start */


/* const container = document.querySelector(".hero-container");
let heightRatio = window.innerWidth / window.innerHeight;
const tl = gsap
    .timeline({
            scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: true,
            invalidateOnRefresh: true
        }
    })
    .fromTo(
        [".hero-bg-svg", ".hero-content"],
        {
            autoAlpha: 0
        },
        {
            autoAlpha: 1
        }
    )
    .fromTo(
        logoPath,
        {
            scaleX: 0.25,
            scaleY: () => 0.25 * heightRatio,
            x: 0,
            transformOrigin: "center center"
        },
        {
            scaleX: 21,
            scaleY: () => 21 * heightRatio,
            x: -1.45,
            transformOrigin: "center center",
            duration: 1,
            ease: "power2.in"
        }
    )
    .to({}, { duration: 0.25 });
    const boxes = gsap.utils.toArray(".box");
    gsap
    .timeline({
            scrollTrigger: {
            trigger: ".panel.green",
            start: "top 20%",
            end: "center 20%",
            scrub: true
        }
    })
    .to(boxes, {
        x: (i) => (i % 2 < 1 ? 100 : -100),
        rotation: (i) => (i % 2 < 1 ? 360 : -360),
        ease: "none"
    });

window.addEventListener("resize", () => {
    const { innerWidth, innerHeight } = window;
    heightRatio = innerWidth / innerHeight;
}); */

/* Hero-Section End */








/* Drone_Info_Third Start */
/*
const gallerySets = {
    nature: [
        {
            src: "https://www-cdn.djiits.com/dps/43bf56f32641bd5b3573afe8909ea0c9.jpg",
            text: "24 mm Hasselblad Camera"
        },
        {
            src: "https://www-cdn.djiits.com/dps/495dad43c8f53af4cf43f02d41cb42b6.jpg",
            text: "166 mm Hasselblad Camera"
        },
        {
            src: "https://www-cdn.djiits.com/dps/6dfda5691cc5fbf4916d7b086987ea9b.jpg",
            text: "70 mm Medium Tele Camera"
        }
    ],

    agriculture: [
        {
            src: "https://www-cdn.djiits.com/dps/62401973ae7ddd5a1a965693e85bcb0f.jpg",
            text: "Agriculture Shot 1"
        },
        {
            src: "https://www-cdn.djiits.com/dps/1c59841f2cb3982c0e632dd0a1ba71d7.jpg",
            text: "Agriculture Shot 2"
        },
        {
            src: "https://www-cdn.djiits.com/dps/ade883d6f3a1e525445772fd9f9037d1.jpg",
            text: "Agriculture Shot 3"
        }
    ],

    wildlife: [
        {
            src: "https://www-cdn.djiits.com/dps/753803eca2e350e6c9b8baa7a6ec6211.jpg",
            text: "Wildlife Photo 1"
        },
        {
            src: "https://www-cdn.djiits.com/dps/2c9e7614571f7a16ef2db728656c2d9d.jpg",
            text: "Wildlife Photo 2"
        },
        {
            src: "https://www-cdn.djiits.com/dps/b2cf08268e944aaf0b379a143ef6c1b2.jpg",
            text: "Wildlife Photo 3"
        }
    ]
};

const btns = document.querySelectorAll(".camera_Zoom_Quality_Gallery_Images_Tabs_Btns button");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

const txt1 = img1.nextElementSibling;
const txt2 = img2.nextElementSibling;
const txt3 = img3.nextElementSibling;

btns.forEach(btn => {
    btn.addEventListener("click", () => {

        // Active button
        btns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const tab = btn.getAttribute("data-tab");
        const items = gallerySets[tab];

        // Fade-out animation
        img1.classList.add("fade-out");
        img2.classList.add("fade-out");
        img3.classList.add("fade-out");

        txt1.classList.add("fade-out");
        txt2.classList.add("fade-out");
        txt3.classList.add("fade-out");

        setTimeout(() => {
            // Change images
            img1.src = items[0].src;
            img2.src = items[1].src;
            img3.src = items[2].src;

            // Change texts
            txt1.textContent = items[0].text;
            txt2.textContent = items[1].text;
            txt3.textContent = items[2].text;

            // Remove fade-out
            img1.classList.remove("fade-out");
            img2.classList.remove("fade-out");
            img3.classList.remove("fade-out");

            txt1.classList.remove("fade-out");
            txt2.classList.remove("fade-out");
            txt3.classList.remove("fade-out");
        }, 250);
    });
}); */


/* Drone_Info_Third End */


document.addEventListener("DOMContentLoaded", function () {
	const carousel = document.querySelector(".carouselll");
	const cards = document.querySelectorAll(".cardddd");
	const prevBtn = document.querySelector(".prevvv");
	const nextBtn = document.querySelector(".nexttt");
	const dots = document.querySelectorAll(".dot");
	const progress = document.querySelector(".progress");

	let cardIndex = 0;
	const totalCards = cards.length;
	const cardWidth = cards[0].offsetWidth;
	const cardMargin = 32; // This matches the gap in CSS
	const moveAmount = cardWidth + cardMargin;

	// Duplicate cards for infinite scrolling effect
	const carouselContent = carousel.innerHTML;
	carousel.innerHTML = carouselContent + carouselContent;

	// Initialize Intersection Observer for lazy loading
	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.1
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const card = entry.target;
				card.style.opacity = 1;
				card.style.transform = "translateY(0)";
				observer.unobserve(card);

				// Preload image
				const img = card.querySelector("img");
				if (img && img.dataset.src) {
					img.src = img.dataset.src;
					delete img.dataset.src;
				}
			}
		});
	}, options);

	// Observe all cards
	document.querySelectorAll(".card").forEach((card) => {
		card.style.opacity = 0;
		card.style.transform = "translateY(30px)";
		observer.observe(card);
	});

	// Set initial progress
	updateProgress();

	nextBtn.addEventListener("click", () => {
		slideCarousel("next");
	});

	prevBtn.addEventListener("click", () => {
		slideCarousel("prev");
	});

	// Add click events to dots
	dots.forEach((dot, index) => {
		dot.addEventListener("click", () => {
			cardIndex = index;
			updateCarousel();
		});
	});

	// Auto-slide timer
	let autoSlideTimer = setInterval(() => {
		slideCarousel("next");
	}, 5000);

	// Reset timer on manual navigation
	function resetTimer() {
		clearInterval(autoSlideTimer);
		autoSlideTimer = setInterval(() => {
			slideCarousel("next");
		}, 5000);
	}

	// Handle carousel sliding
	function slideCarousel(direction) {
		if (direction === "next") {
			cardIndex = (cardIndex + 1) % totalCards;
		} else {
			cardIndex = (cardIndex - 1 + totalCards) % totalCards;
		}

		updateCarousel();
		resetTimer();
	}

	// Update carousel position and active indicators
	function updateCarousel() {
		// Move carousel
		carousel.style.transform = `translateX(-${cardIndex * moveAmount}px)`;

		// Update active dot
		dots.forEach((dot, index) => {
			dot.classList.toggle("active", index === cardIndex);
		});

		// Update progress bar
		updateProgress();

		cards.forEach((card, index) => {
			const diff = index - cardIndex;
			const cardImg = card.querySelector(".card-img img");
			if (Math.abs(diff) <= 2) {
				const translateX = diff * 10;
				cardImg.style.transform = `scale(1.05) translateX(${translateX}px)`;
			}
		});
	}

	// Update progress bar
	function updateProgress() {
		const progressWidth = ((cardIndex + 1) / totalCards) * 100;
		progress.style.width = `${progressWidth}%`;
	}

	// Touch support for mobile devices
	let touchStartX = 0;
	let touchEndX = 0;

	carousel.addEventListener("touchstart", (e) => {
		touchStartX = e.changedTouches[0].screenX;
	});

	carousel.addEventListener("touchend", (e) => {
		touchEndX = e.changedTouches[0].screenX;
		handleSwipe();
	});

	function handleSwipe() {
		if (touchStartX - touchEndX > 50) {
			slideCarousel("next");
		} else if (touchEndX - touchStartX > 50) {
			slideCarousel("prev");
		}
	}

	// Add hover effect to cards
	cards.forEach((card) => {
		card.addEventListener("mouseenter", () => {
			cards.forEach((c) => (c.style.opacity = 0.7));
			card.style.opacity = 1;
		});

		card.addEventListener("mouseleave", () => {
			cards.forEach((c) => (c.style.opacity = 1));
		});
	});

	// Mouse wheel support
	carousel.addEventListener("wheel", (e) => {
		e.preventDefault();
		if (e.deltaY > 0) {
			slideCarousel("next");
		} else {
			slideCarousel("prev");
		}
	});

	// Add keyboard navigation support
	document.addEventListener("keydown", (e) => {
		if (e.key === "ArrowRight") {
			slideCarousel("next");
		} else if (e.key === "ArrowLeft") {
			slideCarousel("prev");
		}
	});

	// Add animation to cards on load
	setTimeout(() => {
		cards.forEach((card, index) => {
			setTimeout(() => {
				card.style.opacity = 1;
				card.style.transform = "translateY(0)";
			}, index * 100);
		});
	}, 300);
});



/* Section Where You Can Use Start */

const videoCards = document.querySelectorAll(".video_usage_card video");

videoCards.forEach(video => {
    video.addEventListener("click", () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });
});

/* Section Where You Can Use End */




/*  */
/* 
$(document).ready(function () {

    //init scrolling parallax
    $(window).scroll(function(e){
        var scrolled = $(window).scrollTop();
        if(scrolled < 750){
            parallax()
        }
    });

    //define parallax function
    function parallax(){
        var scrolled = $(window).scrollTop();
        $('#parallax').css('background-positionY',(scrolled * -0.5)+'px');
    };

});
 */
/*  */





/* Section Battery and Flight Features Start */


/* const batterySection = document.querySelector(".battery-section");

window.addEventListener("scroll", () => {
    const rect = batterySection.getBoundingClientRect();

    if (rect.top < window.innerHeight - 150) {
        batterySection.classList.add("active");
    }
}); */

/* Section Battery and Flight Features End */






$(document).ready(function(){
    $('.battery_and_Flight_Features_Slick_Slider').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            dots: true,
            speed: 300,
            cssEase: 'ease-in-out',
            infinite: true,
            autoplaySpeed: 5000,
            autoplay: true,
            
            responsive: [
            {
                breakpoint: 991,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                }
            }
        ]
    });
});



/* Section Product Gallery Start */

const modal = document.querySelector(".image-modal");
const zoomImg = document.getElementById("zoom-img");
const images = document.querySelectorAll(".img-item");

const prevBtn = document.querySelector(".left-arrow");
const nextBtn = document.querySelector(".right-arrow");

let currentIndex = 0;

images.forEach((img, index) => {
    img.addEventListener("click", () => {
        currentIndex = index;
        showImage();
        modal.style.display = "flex";
    });
});

function showImage() {
    zoomImg.src = images[currentIndex].src;
    zoomImg.style.transform = "scale(1)";
    zoomImg.style.transformOrigin = "center center";
}

prevBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
});

nextBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
});

zoomImg.addEventListener("mousemove", (e) => {
    const rect = zoomImg.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    zoomImg.style.transformOrigin = `${x}% ${y}%`;
    zoomImg.style.transform = "scale(2.5)";
});

zoomImg.addEventListener("mouseleave", () => {
    zoomImg.style.transform = "scale(1)";
    zoomImg.style.transformOrigin = "center center";
});

modal.addEventListener("click", (e) => {
    if (e.target !== zoomImg && !e.target.classList.contains("arrow")) {
        modal.style.display = "none";
        zoomImg.style.transform = "scale(1)";
    }
});

/* Section Product Gallery End */


const parentImage = document.getElementById("parentImage");
const parentTitle = document.getElementById("parentTitle");
const parentText = document.getElementById("parentText");

document.querySelectorAll(".section_Drone_Box_Content_Child_Image").forEach(item => {
    item.addEventListener("click", () => {

        const img = item.querySelector("img").src;
        const title = item.querySelector(".drone_Box_content_Of_Title").textContent;
        const text = item.querySelector(".drone_Box_content_Of__Info_Text").textContent;

        parentImage.src = img;
        parentTitle.textContent = title;
        parentText.textContent = text;
    });
});






const bgColors = [
    "#000000",
    "#ffffff",
    "#1e1e1e",
    "#202833",
    "#2d2f36",
    "#3a3f47",
    "#4b5563",
    "#6b7280",
    "#111827",
    "#0f172a",
    "#1f2937",
    "#374151"
];

let colorIndex = 0;

const bgBtn = document.querySelector(".bgColorBtn");

// Model Viewer
const mvEl = document.getElementById("threeDViewerModel");

bgBtn.addEventListener("click", () => {
    mvEl.style.backgroundColor = bgColors[colorIndex];

    colorIndex++;
    if (colorIndex >= bgColors.length) {
        colorIndex = 0;
    }
});

const viewer = document.getElementById("threeDViewerModel");

let minZoom = 1.2;
let maxZoom = 4.0;

viewer.addEventListener("wheel", (e) => {
    e.preventDefault();

    let currentRadius = viewer.getCameraOrbit().radius;

    let newRadius = currentRadius + (e.deltaY * 2.003); 

    newRadius = Math.max(minZoom, Math.min(maxZoom, newRadius));

    viewer.cameraOrbit = `0deg 75deg ${newRadius}m`;
    viewer.jumpCameraToGoal();
});

const fullscreenBtns = document.querySelectorAll('.fullscreenBtn');

fullscreenBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            threeDViewerModel.requestFullscreen().catch(err => {
                console.error(`Fullscreen error: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    });
});





