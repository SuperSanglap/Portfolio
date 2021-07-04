$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }
        else{
            $('.navbar').removeClass('sticky');
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
    });
    // // Slide Up Script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
    // Toggle Menu/NavBar Script.
    $('.menu-button').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-button i').toggleClass("active");
    });
    // Typing Animation.
    var typed = new Typed(".typing", {
        strings: ["GameDeveloper.", "Programmer.", "BugBounty.", "YouTuber."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // Owl Carousel Script.
    $('.carousel').owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});