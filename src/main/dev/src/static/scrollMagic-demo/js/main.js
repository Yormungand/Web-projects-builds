document.addEventListener("DOMContentLoaded", () => {
    // console.clear();
    planet_1();
    planet_2();
    planet_3();
    planet_4();
    shine_1();
    shine_2();
    // Preloading_icon();
    // Rocket_launch();

    new fullpage("#fullpage", {
        autoScrolling: true,
        scrollHorizontally: false,
        licenseKey: '6BA69EBB-E0184DC2-89065061-0C6FE6F6',
        normalScrollElements: '.our-team',
        scrollOverflow: false,
        responsiveWidth: 1200,
        afterLoad: function(origin, destination, direction){
            var params = {
                origin: origin,
                destination: destination,
                direction: direction,
                speed: 900,
            };
            console.log("--- afterLoad ---");
            console.log(params);
            console.log('===============');
            if (destination.anchor === 'vision' && window.innerWidth >= 960){
                document.getElementsByClassName("vision")[0].classList.add("vision-shown")
                document.getElementsByClassName("vision")[0].classList.remove("vision-hidden")
            } else {
                document.getElementsByClassName("vision")[0].classList.add("vision-shown")
                document.getElementsByClassName("vision")[0].classList.remove("vision-hidden")
            }
            console.clear();
        }
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
    var preloader = new TimelineMax({repeat: -1})
        .to("#rocket-body", .4, {delay: .5, scale: 1.1, ease: Sine.easeInOut, yoyo: true}, "=.2s")
        .to("#rocket-body", .4, {scale: .9, ease: Sine.easeInOut,})
        .to("#rocket-body", .3, {scale: 1, ease: Sine.easeInOut,})
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
                document.getElementById("motionPath").classList.add("fadeOut");
            })
            setTimeout( ()=> {
                document.getElementsByClassName("preload-logo__wrapper")[0].classList.add("fadeIn");
            }, 2000)
        },

    });

    // MotionPathHelper.create(".astronaut");
}



planet_1 = function () {

    const randomX = random(5, 0); // x coordinates
    const randomY = random(-170, 170); // y coordinates
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
    const randomY = random(30, 75); // y coordinates
    const randomDelay = random(0, 0); // delays
    const randomTime = random(30, 15); // random times
    const randomTime2 = random(15, 30); // random times
    const randomAngle = random(-360, 360); // random angle

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

    const randomX = random(5, 0); // x coordinates
    const randomY = random(-170, 170); // y coordinates
    const randomDelay = random(0, 1); // delays
    const randomTime = random(3, 5); // random times
    const randomTime2 = random(5, 10); // random times
    const randomAngle = random(12, 95); // random angle

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