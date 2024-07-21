'use strict';

(function($) {
    
    $('.menu').click(function() {
        $('.menu').toggleClass('clicked');
        $('#nav').toggleClass('show');
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        const imageContainer = document.querySelector(".image-container");
        const image = document.querySelector(".image-container img");

        window.addEventListener("scroll", function() {
            const rect = imageContainer.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                image.classList.add("flipped");
            } else {
                image.classList.remove("flipped");
            }
        });

      const textElement = document.getElementById('animatedText');
      const characters = textElement.textContent.trim().split(""); 
      textElement.textContent = "";
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#animationContainer",
          start: "top 80%",
          end: "top 20%",
          scrub: true
        }
      });
      characters.forEach((char, index) => {
        const span = document.createElement("span");
        span.textContent = char;
        textElement.appendChild(span);
        tl.to(span, {
          opacity: 1,
          duration: 0.5, 
          ease: "power3.inOut", 
          delay: index * 0.1 
        });
      });
    });
    
    function loadImagePopUp() {
        $('.point').on('click', function(e) {
            if ($(e.target).hasClass('close')) {
                $('.popup').hide();
            } else {
                $('.popup').hide();
                $(this).children('.popup').show();
            }
        });
    }
    loadImagePopUp();

    
    gsap.registerPlugin(ScrollTrigger);    
    gsap.from('.banner__text', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'back.in',
    });

    const animation = gsap.from('.banner-btn', {
        y: -100,
        opacity: 0,
        ease: 'back.in',
        duration: 1
    });
    gsap.set('.banner-btn', {
        opacity: 0
    });
    ScrollTrigger.create({
        trigger: '.banner-btn',
        start: 'top 80%',
        onEnter: () => animation.play(),
        onEnterBack: () => animation.play()
    });

    
    gsap.to(".zoom-section", {
        scale: 1.5,
        scrollTrigger: {
            trigger: ".zoom-section",
            start: "top center",
            end: "bottom top",
            scrub: true,
        }
    });

    
    gsap.from(".box-content", {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
            trigger: ".box-content",
            start: "top 80%",
            end: "bottom 40%",
            scrub: 1,
        }
    });

    
    gsap.from(".content", {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
            trigger: ".content",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
        }
    });

    
    const section = document.querySelector('.animated-section');
    const tl = gsap.timeline();
    tl.from(section, {
        opacity: 0,
        y: 100,
        scale: 0.5,
        duration: 1,
        ease: 'power3.out'
    });
    gsap.to('.animated-section', {
        scrollTrigger: {
            trigger: '.animated-section',
            start: 'top 100%',
            end: 'bottom 80%',
            scrub: 1
        },
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'power3.out'
    });

    
    const t2Section3 = gsap.timeline({
        scrollTrigger: {
            trigger: '#section3',
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
        }
    });
    t2Section3.from('#section3', {
        duration: 1,
        y: '30%',
        opacity: 0,
        ease: 'power4.out'
    });

    
    const t2Section4 = gsap.timeline({
        scrollTrigger: {
            trigger: '#section4',
            start: 'top 80%',
            end: 'bottom 20%',
            scrub: 1,
        }
    });
    t2Section4.from('#section4', {
        duration: 1,
        y: '20%',
        opacity: 0,
        ease: 'power4.out'
    });

    
    gsap.utils.toArray('.section').forEach(section => {
        ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
            scrub: true
        });
    });

    
    const tread = document.getElementById('tread');
    gsap.to(tread, {
        rotationY: 360,
        duration: 5,
        ease: "none",
        repeat: -1
    });

    
    function animateImagePieces() {
        const t3 = gsap.timeline({
            scrollTrigger: {
                trigger: "#cycle-container",
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
                anticipatePin: 1
            }
        });
        for (let i = 1; i <= 8; i++) {
            t3.to(`#piece${i}`, { opacity: 1, duration: 1 });
        }
    }
    animateImagePieces();

})(jQuery);


const counter = { val: 0 };
const t4 = gsap.timeline({ paused: true });
t4.to(counter, {
    val: 100,
    onUpdate: updateCounter,
    ease: "power1.out",
});
function updateCounter() {
    const counterElement = document.querySelector('.counter');
    const circleElement = document.querySelector('circle');
    counterElement.textContent = `${Math.floor(counter.val)}%`;
    const borderColor = `hsl(0, 100%, 50%)`;
    circleElement.setAttribute('stroke', borderColor);
    const circumference = parseFloat(circleElement.getAttribute('stroke-dasharray'));
    const dashOffset = circumference * (1 - (counter.val / 100));
    gsap.to(circleElement, {
        strokeDashoffset: dashOffset,
        duration: 0.5,
        ease: "none"
    });
}

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.create({
    trigger: ".circle-container",
    start: "top 70%",
    onEnter: () => t4.play(),
});
