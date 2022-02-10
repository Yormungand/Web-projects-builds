document.addEventListener("DOMContentLoaded", () => {
    // console.clear();
    let planet1 = document.querySelector("#planet-1");
    let planet2 = document.querySelector("#planet-2");
    let planet3 = document.querySelector("#planet-3");
    let planet4 = document.querySelector("#planet-4");
    let shine1 = document.querySelector(".sphere-1");
    let shine2 = document.querySelector(".sphere-2");

    if (home !== undefined && home) {
        planet_1();
        planet_2();
        planet_3();
        planet_4();
        shine_1();
        shine_2();
        Preloading_icon();
        document.querySelectorAll('.back')[0].style.display = 'none'
    } else if (home === false) {

    }

    new Swiper(".article-swiper", {
        speed: 800,
        autoplay:{
            delay: 3500,
        },
        pagination: {
            el: ".swiper-pagination",
        },
        pauseOnMouseEnter: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            1200: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 640px
            1600: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        },
    })

})


shine_1 = function () {


    const randomX = random(20, 55); // x coordinates
    const randomY = random(55, 170); // y coordinates
    const randomDelay = random(0, 1); // delays
    const randomTime = random(3, 5); // random times
    const randomTime2 = random(5, 10); // random times
    const randomAngle = random(12, 95); // random angle

    const moon = document.querySelector(".sphere-1");

    TweenLite.set(moon, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1)
    });

    moveX(moon, 1);
    moveY(moon, -1);
    rotate(moon, 1);

    function rotate(target, direction) {

        TweenLite.to(target, randomTime2(), {
            rotation: randomAngle(direction),
            // delay: randomDelay(),
            ease: Sine.easeInOut,
            onComplete: rotate,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveX(target, direction) {

        TweenLite.to(target, randomTime(), {
            x: randomX(direction),
            ease: Sine.easeInOut,
            onComplete: moveX,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveY(target, direction) {

        TweenLite.to(target, randomTime(), {
            y: randomY(direction),
            ease: Sine.easeInOut,
            onComplete: moveY,
            onCompleteParams: [target, direction * -1]
        });
    }

    function random(min, max) {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;
    }
}
shine_2 = function () {


    const randomX = random(-150, 120); // x coordinates
    const randomY = random(-15, 55); // y coordinates
    const randomDelay = random(0, 1); // delays
    const randomTime = random(3, 5); // random times
    const randomTime2 = random(3, 7); // random times
    const randomAngle = random(12, 95); // random angle

    const moon = document.querySelector(".sphere-2");

    TweenLite.set(moon, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1)
    });

    moveX(moon, 1);
    moveY(moon, -1);
    rotate(moon, 1);

    function rotate(target, direction) {

        TweenLite.to(target, randomTime2(), {
            rotation: randomAngle(direction),
            // delay: randomDelay(),
            ease: Sine.easeInOut,
            onComplete: rotate,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveX(target, direction) {

        TweenLite.to(target, randomTime(), {
            x: randomX(direction),
            ease: Sine.easeInOut,
            onComplete: moveX,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveY(target, direction) {
        TweenLite.to(target, randomTime(), {
            y: randomY(direction),
            ease: Sine.easeInOut,
            onComplete: moveY,
            onCompleteParams: [target, direction * -1]
        });
    }

    function random(min, max) {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;
    }
}


//ease: Back.easeOut.config(2),

Preloading_icon = function () {
    let preloader = new TimelineMax({repeat: -1})
        .to("#rocket-body", .4, {delay: .5, scale: 1.1, ease: Sine.easeInOut, yoyo: true}, "=.2s")
        .to("#rocket-body", .4, {scale: .9, ease: Sine.easeInOut,})
        .to("#rocket-body", .3, {scale: 1, ease: Sine.easeInOut,})
}





planet_1 = function () {

    const randomX = random(5, 0); // x coordinates
    const randomY = random(0, 50); // y coordinates
    const randomDelay = random(0, 1); // delays
    const randomTime = random(3, 5); // random times
    const randomTime2 = random(5, 10); // random times
    const randomAngle = random(12, 95); // random angle

    const planet = document.querySelector("#planet-1");

    TweenLite.set(planet, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1)
    });

    moveX(planet, 1);
    moveY(planet, -1);
    rotate(planet, 1);

    function rotate(target, direction) {

        TweenLite.to(target, randomTime2(), {
            rotation: randomAngle(direction),
            // delay: randomDelay(),
            ease: Sine.easeInOut,
            onComplete: rotate,
            onCompleteParams: [target, direction * -1]
        });

    }

    function moveX(target, direction) {
        TweenLite.to(target, randomTime(), {
            x: randomX(direction),
            ease: Sine.easeInOut,
            onComplete: moveX,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveY(target, direction) {

        TweenLite.to(target, randomTime(), {
            y: randomY(direction),
            ease: Sine.easeInOut,
            onComplete: moveY,
            onCompleteParams: [target, direction * -1]
        });
    }

    function random(min, max) {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;
    }
}


planet_2 = function () {

    const randomX = random(5, 0); // x coordinates
    const randomY = random(30, 75); // y coordinates
    const randomDelay = random(0, 0); // delays
    const randomTime = random(30, 15); // random times
    const randomTime2 = random(15, 30); // random times
    const randomAngle = random(-360, 360); // random angle

    const planet = document.querySelector("#planet-2");

    TweenLite.set(planet, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1)
    });

    moveX(planet, 1);
    moveY(planet, -1);
    rotate(planet, 1);

    function rotate(target, direction) {

        TweenLite.to(target, randomTime2(), {
            rotation: randomAngle(direction),
            // delay: randomDelay(),
            ease: Sine.easeInOut,
            onComplete: rotate,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveX(target, direction) {
        TweenLite.to(target, randomTime(), {
            x: randomX(direction),
            ease: Sine.easeInOut,
            onComplete: moveX,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveY(target, direction) {

        TweenLite.to(target, randomTime(), {
            y: randomY(direction),
            ease: Sine.easeInOut,
            onComplete: moveY,
            onCompleteParams: [target, direction * -1]
        });
    }

    function random(min, max) {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;
    }
}


planet_3 = function () {

    const randomX = random(5, 0); // x coordinates
    const randomY = random(30, -50); // y coordinates
    const randomDelay = random(0, 0); // delays
    const randomTime = random(30, 15); // random times
    const randomTime2 = random(15, 30); // random times
    const randomAngle = random(-210, 210); // random angle

    const planet = document.querySelector("#planet-3");

    TweenLite.set(planet, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1)
    });

    moveX(planet, 1);
    moveY(planet, -1);
    rotate(planet, 1);

    function rotate(target, direction) {

        TweenLite.to(target, randomTime2(), {
            rotation: randomAngle(direction),
            // delay: randomDelay(),
            ease: Sine.easeInOut,
            onComplete: rotate,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveX(target, direction) {
        TweenLite.to(target, randomTime(), {
            x: randomX(direction),
            ease: Sine.easeInOut,
            onComplete: moveX,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveY(target, direction) {

        TweenLite.to(target, randomTime(), {
            y: randomY(direction),
            ease: Sine.easeInOut,
            onComplete: moveY,
            onCompleteParams: [target, direction * -1]
        });
    }

    function random(min, max) {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;
    }
}


planet_4 = function () {

    const randomX = random(-120, 50); // x coordinates
    const randomY = random(-50, 120); // y coordinates
    const randomDelay = random(3, 1); // delays
    const randomTime = random(12, 21); // random times
    const randomTime2 = random(15, 32); // random times
    const randomAngle = random(-360, 360); // random angle

    const planet = document.querySelector("#planet-4");

    TweenLite.set(planet, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1)
    });

    moveX(planet, 1);
    moveY(planet, -1);
    rotate(planet, 1);

    function rotate(target, direction) {

        TweenLite.to(target, randomTime2(), {
            rotation: randomAngle(direction),
            // delay: randomDelay(),
            ease: Sine.easeInOut,
            onComplete: rotate,
            onCompleteParams: [target, direction * -1]
        });

    }

    function moveX(target, direction) {
        TweenLite.to(target, randomTime(), {
            x: randomX(direction),
            ease: Sine.easeInOut,
            onComplete: moveX,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveY(target, direction) {

        TweenLite.to(target, randomTime(), {
            y: randomY(direction),
            ease: Sine.easeInOut,
            onComplete: moveY,
            onCompleteParams: [target, direction * -1]
        });
    }

    function random(min, max) {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;
    }
}


Rocket_launch = function () {
    gsap.registerPlugin(MotionPathPlugin);
    gsap.set(".astronaut", {scale: 0.5, autoAlpha: 1});
    gsap.to(".astronaut", {
        duration: 6,
        ease: "power1.inOut",
        immediateRender: true,
        motionPath: {
            path: "#path",
            align: "#path",
            alignOrigin: [0.5, 0.5],
            autoRotate: 90
        },
        onComplete:()=>{
            setTimeout( ()=> {
                // document.getElementById("motionPath").classList.add("fadeOut");
                fadeOut(document.querySelector("#motionPath"), 100)
            })
            setTimeout( ()=> {
                // document.getElementsByClassName("preload-logo__wrapper")[0].classList.add("fadeIn");
                fadeIn(document.querySelectorAll(".preload-logo__wrapper")[0], 100)
            }, 1000)
            setTimeout(()=>{
                fadeOut(document.querySelectorAll(".preloader")[0], 100)
                rocket_launched = true;
                rocketProxy.hello = "test";
            }, 2500)
        },
    });

    return Promise.resolve();
    // MotionPathHelper.create(".astronaut");
}

/*fadeOut = (target, duration) => {
    let fadeOutEffect = setInterval(()=>{
        if (!target.style.opacity)
            target.style.opacity = 1;
        if (target.style.opacity > 0)
            target.style.opacity -= 0.1;
        else
            clearInterval(fadeOutEffect)
    }, duration)
    return this;
}*/
/*
fadeIn = (target, duration) => {
    let fadeInEffect = setInterval(()=>{
        if (target.style.opacity)
            target.style.opacity = 0
        if (1 >= target.style.opacity )
            target.style.opacity += 0.1
        else
            clearInterval(fadeInEffect)
    }, duration)
}*/

function fadeOut(element) {
    element.style.opacity = 0;
    element.addEventListener('transitionend', (e)=>{
        e.target.remove();
    })
}
function fadeIn(element) {
    element.style.opacity = 1;
    /*element.addEventListener('transitionend', ()=>{
        target.remove();
    })*/
}

JobAd = {
    currentId: null,
    formReady: false,
    infoLoaded: false,
    init: () => {
        const _this = JobAd;
        _this.beginRequests();
    },
    beginRequests:(id)=>{
        let firstId = document.querySelectorAll('.jobs')[0].getAttribute("data-id");
        if (id) {
            jobInfo(id);
        } else {
            jobInfo(firstId);
        }
    },
    triggerCV:(el)=>{
        el.click();
        return false;
    },
    post:()=>{
        axios.post('/jobad/cv', new FormData(document.getElementById('cvForm')),{
            headers: {
                'Content-Type': 'multipart/form-data',
                accept: 'text/html; charset=UTF-8'
            },
            method: "POST",
            responseType: 'document',
        }).then(function (res){
            UIkit.notification('Амжилттай', {status:'success'})
        }).catch((error)=>{
            UIkit.notification('Амжилтгүй' + error, {status:'danger'})
        })
    }
}
jobInfo = function (id) {
    axios.get(`/api/jobad/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json'
        }
    })
        .then((response) => {
            if (document.getElementById("cv-name"))
                document.getElementById("cv-name").innerText = '';
            console.log(response)
            document.getElementById('job-acoustic').innerHTML = "" +
                "<div>" +
                "   <div class='item open'>" +
                "       <div class='acoustic-button'>" +
                "           <button class='button button-fill button-medium' onclick='Acoustic.init(this)'>The main" +
                "               role" +
                "           </button>" +
                "           <div class='mask'></div>" +
                "       </div>" +
                "       <div class='context'>" +
                "           <div>"+response.data.mainRequirement+"</div>" +
                "       </div>" +
                "   </div>" +
                "</div>" +
                "<div>" +
                "   <div class='item'>" +
                "       <div class='acoustic-button'>" +
                "           <button class='button button-transparent button-medium' onclick='Acoustic.init(this)'>Basic" +
                "               requirements" +
                "           </button>" +
                "           <div class='mask'></div>" +
                "       </div>" +
                "       <div class='context'>" +
                "           <div>"+response.data.basicRequirement+"</div>" +
                "       </div>" +
                "   </div>" +
                "</div>" +
                "<div>" +
                "   <div class='item'>" +
                "       <div class='acoustic-button'>" +
                "           <button class='button button-transparent button-medium' onclick='Acoustic.init(this)'>Date" +
                "               of recieve form" +
                "           </button>" +
                "           <div class='mask'></div>" +
                "       </div>" +
                "       <div class='context'>" +
                "           <div></div>" +
                "       </div>" +
                "   </div>" +
                "</div>";
            getJobForm(id);
            document.querySelectorAll('.jobs').forEach((el)=>{
                if (el.getAttribute("data-id") === id.toString())
                    el.className = 'jobs button-text button-text__active';
                else
                    el.className = 'jobs button-text';
            })
        })
};
getJobForm = function (jobId) {
    axios.get(`/jobad/cv?jobAdId=${jobId}`, {
        headers: {
            'Content-Type': 'text/html; charset=UTF-8',
            accept: 'text/html; charset=UTF-8'
        }
    })
        .then((response) => {
            document.getElementById('form-target').innerHTML = response.data;
        })
        .catch((error)=>{
            console.error(error);
        })
}

planet_big = function () {
    const randomX = random(20, 55); // x coordinates
    const randomY = random(55, 170); // y coordinates
    const randomDelay = random(5, 12); // delays
    const randomTime = random(11, 17); // random times
    const randomTime2 = random(19, 12); // random times
    const randomAngle = random(0, 0); // random angle
    const planet = document.querySelector(".planet-big");
    TweenLite.set(planet, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1)
    });
    moveX(planet, 1);
    moveY(planet, -1);
    function moveX(target, direction) {
        TweenLite.to(target, randomTime(), {
            x: randomX(direction),
            ease: Sine.easeInOut,
            onComplete: moveX,
            onCompleteParams: [target, direction * -1]
        });
    }
    function moveY(target, direction) {
        TweenLite.to(target, randomTime(), {
            y: randomY(direction),
            ease: Sine.easeInOut,
            onComplete: moveY,
            onCompleteParams: [target, direction * -1]
        });
    }
    function random(min, max) {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;
    }
}
planet_small = function () {
    const randomX = random(-20, -55); // x coordinates
    const randomY = random(170, 55); // y coordinates
    const randomDelay = random(23, 27); // delays
    const randomTime = random(21, 16); // random times
    const randomTime2 = random(15, 20); // random times
    const randomAngle = random(0, 0); // random angle

    const planet = document.querySelector(".planet-small");

    TweenLite.set(planet, {
        x: randomX(-1),
        y: randomX(1),
        rotation: randomAngle(-1)
    });

    moveX(planet, 1);
    moveY(planet, -1);

    function moveX(target, direction) {

        TweenLite.to(target, randomTime(), {
            x: randomX(direction),
            ease: Sine.easeInOut,
            onComplete: moveX,
            onCompleteParams: [target, direction * -1]
        });
    }

    function moveY(target, direction) {

        TweenLite.to(target, randomTime(), {
            y: randomY(direction),
            ease: Sine.easeInOut,
            onComplete: moveY,
            onCompleteParams: [target, direction * -1]
        });
    }

    function random(min, max) {
        const delta = max - min;
        return (direction = 1) => (min + delta * Math.random()) * direction;
    }
}