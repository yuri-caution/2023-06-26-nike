$(function(){
    $('.header').load('../inc/header.html')
    $('.footer').load('../inc/footer.html')
    $('.main_slide_01').slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.main_slide_02').slick({
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.list').slick({
        slidesToShow: 4,
        responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
    });
})