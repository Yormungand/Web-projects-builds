

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('header').addClass('header-appear');
        } else {
            $('header').removeClass('header-appear');
        }
    });

$(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        let target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    let scrollPos = $(document).scrollTop();
    $('.navbar-collapse a').each(function () {
        let currLink = $(this);
        let refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-collapse ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


window.addEventListener("load", () => {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        scrollFromAnywhere: true,
        multiplier: 1,
        getDirection: true,
        reloadOnContextChange: true,
        touchMultiplier: 3,
        smoothMobile: 0,
        smartphone: {
            smooth: !0,
            breakpoint: 766
        },
        tablet: {
            smooth: !0,
            breakpoint: 1010
        },
    });

    scroll.on("call", callValue => {
        if (callValue === "lst_pr") {
            navBtn1.classList.add("active");
        } else {
            navBtn1.classList.remove("active");
        };

        if (callValue === "old_pr") {
            navBtn2.classList.add("active");
        } else {
            navBtn2.classList.remove("active");
        };

        if (callValue === "arc_pr") {
            navBtn3.classList.add("active");
        } else {
            navBtn3.classList.remove("active");
        };

        if (callValue === "plg_pr") {
            navBtn4.classList.add("active");
        } else {
            navBtn4.classList.remove("active");
        };
    });
});

const navBtn1 = document.getElementById("nav-btn-1");
const navBtn2 = document.getElementById("nav-btn-2");
const navBtn3 = document.getElementById("nav-btn-3");
const navBtn4 = document.getElementById("nav-btn-4");