window.addEventListener("DOMContentLoaded", () => {
    $(".usage__card-wrapper").slick({
        responsive: [
            {
                breakpoint: 10000,
                settings: "unslick",
            },
            {
                breakpoint: 1190,
                settings: {
                    variableWidth: true,
                    centerMode: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // dots: true,
                    // adaptiveHeight: true,
                    infinite: false,
                    // initialSlide: 1
                },
            },
            {
                breakpoint: 768,
                settings: {
                    variableWidth: true,
                    centerMode: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    // adaptiveHeight: true,
                    infinite: false,
                    // initialSlide: 1
                },
            },
        ],
    });

    $(".other-features__slider-wrapper").slick({
        arrows: true,
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots: true,
        prevArrow:
            '<button type="button" class="slick-prev"><img src="icons/icon-landing-slider-arrow-left.svg"></button>',
        nextArrow:
            '<button type="button" class="slick-next"><img src="icons/icon-landing-slider-arrow-right.svg"></button>',
        responsive: [

            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                },
            },
        ],
    });

    $(".review__slider-wrapper").slick({
        arrows: true,
        centerMode: false,
        variableWidth: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        // adaptiveHeight: true,
        // dots: true,
        prevArrow:
            '<button type="button" class="slick-prev"><img src="icons/icon-landing-slider-arrow-left.svg"></button>',
        nextArrow:
            '<button type="button" class="slick-next"><img src="icons/icon-landing-slider-arrow-right.svg"></button>',
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centerMode: false,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    // arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                },
            },
        ],
    });
});

