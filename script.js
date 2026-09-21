// Initialize Lenis for Smooth Scrolling (Framer-like feel)
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
})

// Integrate Lenis with GSAP ScrollTrigger
lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


// Custom Cursor Logic
const cursor = document.querySelector('.cursor');
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth cursor follow
gsap.ticker.add(() => {
    cursorX += (mouseX - cursorX) * 0.2;
    cursorY += (mouseY - cursorY) * 0.2;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
});

// Cursor Hover Effects
const interactables = document.querySelectorAll('a, button');
interactables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(cursor, { width: 40, height: 40, duration: 0.3, ease: "power2.out" });
    });
    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, { width: 12, height: 12, duration: 0.3, ease: "power2.out" });
    });
});

const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(cursor, { width: 80, height: 80, mixBlendMode: 'normal', backgroundColor: '#fff', duration: 0.3, ease: "power2.out" });
        cursor.innerHTML = '<span style="color: black; font-size: 10px; font-weight: 600; text-transform: uppercase; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); pointer-events: none;">View</span>';
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(cursor, { width: 12, height: 12, mixBlendMode: 'difference', backgroundColor: '#fff', duration: 0.3, ease: "power2.out" });
        cursor.innerHTML = '';
    });
});


// GSAP Reveal Animations
document.addEventListener("DOMContentLoaded", (event) => {
    // Reveal text elements on scroll
    const revealElements = document.querySelectorAll('.reveal-text');
    revealElements.forEach((el) => {
        gsap.fromTo(el, 
            { y: 50, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Reveal project cards on scroll
    const revealCards = document.querySelectorAll('.reveal-card');
    revealCards.forEach((card, index) => {
        gsap.fromTo(card, 
            { y: 80, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
