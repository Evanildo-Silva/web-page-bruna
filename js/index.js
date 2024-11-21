let mainSliderSelector = '.main-slider',
    navSliderSelector = '.nav-slider',
    weddingSectionSliderSelector = '.wedding-section-slider',
    weddingNavSliderSelector = '.wedding-nav-slider',
    debutanteSectionSliderSelector = '.debutante-section-slider',
    debutanteNavSliderSelector = '.debutante-nav-slider',
    birthdaySectionSliderSelector = '.birthday-section-slider',
    birthdayNavSliderSelector = '.birthday-nav-slider',
    interleaveOffset = 0.5;

// Main Slider
let mainSliderOptions = {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000
    },
    loopAdditionalSlides: 17,
    grabCursor: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        init: function () {
            this.autoplay.stop();
        },
        imagesReady: function () {
            this.el.classList.remove('loading');
            this.autoplay.start();
        },
        slideChangeTransitionEnd: function () {
            let swiper = this,
                captions = swiper.el.querySelectorAll('.caption');
            for (let i = 0; i < captions.length; ++i) {
                captions[i].classList.remove('show');
            }
            swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
        },
        progress: function () {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                let slideProgress = swiper.slides[i].progress,
                    innerOffset = swiper.width * interleaveOffset,
                    innerTranslate = slideProgress * innerOffset;

                swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                    "translateX(" + innerTranslate + "px)";
            }
        },
        touchStart: function () {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
            }
        },
        setTransition: function (speed) {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                    speed + "ms";
            }
        }
    }
};

function initNavSlider(direction) {
    if (navSlider) navSlider.destroy(true, true);
    navSlider = new Swiper(navSliderSelector, {
        loop: true,
        loopAdditionalSlides: 17,
        speed: 1000,
        spaceBetween: 5,
        slidesPerView: 5,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        direction: direction, // Dynamic direction
        on: {
            imagesReady: function () {
                this.el.classList.remove('loading');
            },
            click: function () {
                mainSlider.autoplay.stop();
            }
        }
    });

    mainSlider.controller.control = navSlider;
    navSlider.controller.control = mainSlider;
}

// Initialize sliders
let mainSlider = new Swiper(mainSliderSelector, mainSliderOptions);
let navSlider;

function updateSliderDirection() {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    const direction = isSmallScreen ? 'horizontal' : 'vertical';
    initNavSlider(direction);
}

updateSliderDirection();

window.addEventListener('resize', updateSliderDirection);

//====================================================================================================================

// weddingSection Slider (Independent)
let weddingSectionSliderOptions = {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000
    },
    loopAdditionalSlides: 10,
    grabCursor: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.wedding-section-slider-next',
        prevEl: '.wedding-section-slider-prev',
    },
    on: {
        init: function () {
            this.autoplay.stop();
        },
        imagesReady: function () {
            this.el.classList.remove('loading');
            this.autoplay.start();
        },
        slideChangeTransitionEnd: function () {
            let swiper = this,
                captions = swiper.el.querySelectorAll('.caption');
            for (let i = 0; i < captions.length; ++i) {
                captions[i].classList.remove('show');
            }
            swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
        },
        progress: function () {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                let slideProgress = swiper.slides[i].progress,
                    innerOffset = swiper.width * interleaveOffset,
                    innerTranslate = slideProgress * innerOffset;

                swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                    "translateX(" + innerTranslate + "px)";
            }
        },
        touchStart: function () {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
            }
        },
        setTransition: function (speed) {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                    speed + "ms";
            }
        }
    }
};

function initWeddingNavSlider(direction) {
    if (weddingNavSlider) weddingNavSlider.destroy(true, true);
    weddingNavSlider = new Swiper(weddingNavSliderSelector, {
        loop: true,
        loopAdditionalSlides: 15,
        speed: 1000,
        spaceBetween: 5,
        slidesPerView: 5,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        direction: direction, // Dynamic direction
        on: {
            imagesReady: function () {
                this.el.classList.remove('loading');
            },
            click: function () {
                weddingSectionSlider.autoplay.stop();
            }
        }
    });

    weddingSectionSlider.controller.control = weddingNavSlider;
    weddingNavSlider.controller.control = weddingSectionSlider;
}

let weddingSectionSlider = new Swiper(weddingSectionSliderSelector, weddingSectionSliderOptions);
let weddingNavSlider;

function updateWeddingSliderDirection() {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    const direction = isSmallScreen ? 'horizontal' : 'vertical';
    initWeddingNavSlider(direction);
}

updateWeddingSliderDirection();

window.addEventListener('resize', updateWeddingSliderDirection);

//====================================================================================================================

// debutanteSection Slider (Independent)
let debutanteSectionSliderOptions = {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000
    },
    loopAdditionalSlides: 7,
    grabCursor: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.debutante-section-slider-next',
        prevEl: '.debutante-section-slider-prev',
    },
    on: {
        init: function () {
            this.autoplay.stop();
        },
        imagesReady: function () {
            this.el.classList.remove('loading');
            this.autoplay.start();
        },
        slideChangeTransitionEnd: function () {
            let swiper = this,
                captions = swiper.el.querySelectorAll('.caption');
            for (let i = 0; i < captions.length; ++i) {
                captions[i].classList.remove('show');
            }
            swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
        },
        progress: function () {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                let slideProgress = swiper.slides[i].progress,
                    innerOffset = swiper.width * interleaveOffset,
                    innerTranslate = slideProgress * innerOffset;

                swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                    "translateX(" + innerTranslate + "px)";
            }
        },
        touchStart: function () {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
            }
        },
        setTransition: function (speed) {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                    speed + "ms";
            }
        }
    }
};

function initDebutanteNavSlider(direction) {
    if (debutanteNavSlider) debutanteNavSlider.destroy(true, true);
    debutanteNavSlider = new Swiper(debutanteNavSliderSelector, {
        loop: true,
        loopAdditionalSlides: 7,
        speed: 1000,
        spaceBetween: 5,
        slidesPerView: 5,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        direction: direction, // Dynamic direction
        on: {
            imagesReady: function () {
                this.el.classList.remove('loading');
            },
            click: function () {
                debutanteSectionSlider.autoplay.stop();
            }
        }
    });

    debutanteSectionSlider.controller.control = debutanteNavSlider;
    debutanteNavSlider.controller.control = debutanteSectionSlider;
}

let debutanteSectionSlider = new Swiper(debutanteSectionSliderSelector, debutanteSectionSliderOptions);
let debutanteNavSlider;

function updateDebutanteSliderDirection() {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    const direction = isSmallScreen ? 'horizontal' : 'vertical';
    initDebutanteNavSlider(direction);
}

updateDebutanteSliderDirection();

window.addEventListener('resize', updateDebutanteSliderDirection);

//====================================================================================================================

// birthdaySection Slider (Independent)
let birthdaySectionSliderOptions = {
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 3000
    },
    loopAdditionalSlides: 7,
    grabCursor: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: '.birthday-section-slider-next',
        prevEl: '.birthday-section-slider-prev',
    },
    on: {
        init: function () {
            this.autoplay.stop();
        },
        imagesReady: function () {
            this.el.classList.remove('loading');
            this.autoplay.start();
        },
        slideChangeTransitionEnd: function () {
            let swiper = this,
                captions = swiper.el.querySelectorAll('.caption');
            for (let i = 0; i < captions.length; ++i) {
                captions[i].classList.remove('show');
            }
            swiper.slides[swiper.activeIndex].querySelector('.caption').classList.add('show');
        },
        progress: function () {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                let slideProgress = swiper.slides[i].progress,
                    innerOffset = swiper.width * interleaveOffset,
                    innerTranslate = slideProgress * innerOffset;

                swiper.slides[i].querySelector(".slide-bgimg").style.transform =
                    "translateX(" + innerTranslate + "px)";
            }
        },
        touchStart: function () {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
            }
        },
        setTransition: function (speed) {
            let swiper = this;
            for (let i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = speed + "ms";
                swiper.slides[i].querySelector(".slide-bgimg").style.transition =
                    speed + "ms";
            }
        }
    }
};

function initBirthdayNavSlider(direction) {
    if (birthdayNavSlider) birthdayNavSlider.destroy(true, true);
    birthdayNavSlider = new Swiper(birthdayNavSliderSelector, {
        loop: true,
        loopAdditionalSlides: 7,
        speed: 1000,
        spaceBetween: 5,
        slidesPerView: 5,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true,
        direction: direction, // Dynamic direction
        on: {
            imagesReady: function () {
                this.el.classList.remove('loading');
            },
            click: function () {
                birthdaySectionSlider.autoplay.stop();
            }
        }
    });

    birthdaySectionSlider.controller.control = birthdayNavSlider;
    birthdayNavSlider.controller.control = birthdaySectionSlider;
}

let birthdaySectionSlider = new Swiper(birthdaySectionSliderSelector, birthdaySectionSliderOptions);
let birthdayNavSlider;

function updateBirthdaySliderDirection() {
    const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
    const direction = isSmallScreen ? 'horizontal' : 'vertical';
    initBirthdayNavSlider(direction);
}

updateBirthdaySliderDirection();

window.addEventListener('resize', updateBirthdaySliderDirection);

// Handler hamburge-menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const body = document.body;
    const menuLinks = document.querySelectorAll('.menu a');

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    body.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        }
    });

    menu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            menu.classList.remove('active');
        });
    });
});
