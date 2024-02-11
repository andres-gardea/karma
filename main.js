document.addEventListener("DOMContentLoaded", function () {
    const digit3 = document.querySelector(".digit-3");

    for (let i = 0; i < 2; i++); {
        for (let j = 0; j < 10; j++) {
            const div = document.createElement("div");
            div.className = "num";
            div.textContent = j;
            digit3.appendChild(div);
        }
    }

    const finalDiv = document.createElement("div");
    finalDiv.className = "num";
    finalDiv.textContent = "0";
    digit3.appendChild(finalDiv);

    function animate(counter, duration, delay = 1.6) {
        const numHeight = counter.querySelector(".num").clientHeight;
        const totalDistance = (counter.querySelectorAll(".num").length - 1) * numHeight;

        gsap.to(counter, {
            y: -totalDistance,
            duration: duration,
            delay: delay,
            ease: "power2.inOut"
        });
    }
    animate(digit3, 5);
    animate(document.querySelector(".digit-2"), 6);
    animate(document.querySelector(".digit-1"), 2, 5.2); // Duracion y Delay

});

gsap.to("#Loading-Screen", {
    opacity: 1,
    duration: 1,
});

        gsap.to(".block", {
            display: "none",
            duration: 0.5,
            delay: 3
        })

gsap.from(".loader-text-container div", {
    duration: 1.5,
    yPercent: 100,
    ease: "power4.inOut",
    stagger: {
        amount: 0.5,
    },
});

gsap.to(
    ".loader-text-container", {
    duration: 1.5,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ease: "power4.inOut",
    stagger: {
        amount: 0.5,
    },
},
    0
);

gsap.from(".loader-text-container-2 div", {
    duration: 1.5,
    yPercent: 100,
    ease: "power4.inOut",
    stagger: {
        amount: 0.5,
    },
    delay: 5
});

gsap.to(
    ".loader-text-container-2", {
    duration: 1.5,
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    ease: "power4.inOut",
    stagger: {
        amount: 0.5,
    },
    delay: 5
},
);

gsap.to("#Loading-Screen", {
    pointerEvents: "auto",
    cursor: "pointer",
    delay: 5.5
});

gsap.to("body", {
    backgroundColor: "var(--background-1)",
    duration: 0.5,
    delay: 3
})

document.addEventListener("DOMContentLoaded", function () {
    let overlay = document.querySelector(".overlay");
    overlay.addEventListener("click", function () {
        gsap.to(".loader-text-container div, .loader-text-container-2 div", 1.5, {
            yPercent: -100,
            ease: "power4.inOut",
            stagger: {
                amount: 0.5,
            },
        });
        gsap.to(
            ".loader-text-container, .loader-text-container-2",
            1.5,
            {
                clipPath: "polygon(0 85%, 100% 85%, 100% 100%, 0% 100%)",
                ease: "power4.inOut",
                stagger: {
                    amount: 0.5,
                },
            },
            0
        );

        gsap.to(".overlay", 2, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            ease: "power4.inOut",
        });

        gsap.to(".img", 2, {
            clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
            ease: "power4.inOut",
            stagger: {
                amount: 1.5,
            },
        });

        gsap.to(".loader", 2, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            ease: "power4.inOut",
            delay: 2,
        });

        gsap.to("#Loading-Screen", {
            cursor: "auto",
            delay: 3
        });

        gsap.to("#Loading-Screen", 2, {
            zIndex: -10,
            delay: 4,
        });

        gsap.to(".nav-bar", {
            top: "0",
            ease: "power3.inOut",
            duration: 2,
            delay: 2.1,
          });
    });
});

/*Animaciones del Nav*/
const tl = gsap.timeline({ paused: true });

const animateOpenNav = () => {

    tl.to(".nav-container", 0.8, {
        y: '101vh',
        ease: "power4.inOut",
        autoAlpha: 1,
        delay: 0.1,
    });

    tl.to(".nav-bar", 0, {
        backgroundColor: "#ffffff00",
        delay: -0.6,
    });


    tl.to(".city-text, .logo-text", 0.2, {
        color: "#ffffff",
    },
        "-+0.1");

    tl.from(".social-links > div", 0.4, {
        opacity: 0,
        y: 10,
        stagger: {
            amount: 0.4,
        },
    });

    tl.to(".contact-link > a", 0.8, {
        top: 0,
        ease: "power2.inOut",
        stagger: {
            amount: 0.4,
        },
    },
        "-=0.4");

    tl.from(".nav-footer", 0.3, {
        opacity: 0
    }, "-=0.5").reverse();
};

const openNav = () => {
    animateOpenNav();
    const navBtn = document.getElementById("menu-toggle-btn");
    navBtn.onclick = function (e) {
        navBtn.classList.toggle("active");
        tl.reversed(!tl.reversed());
    };
};

openNav();
