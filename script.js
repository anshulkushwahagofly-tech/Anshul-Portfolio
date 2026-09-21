// Lenis Smooth Scroll
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => { lenis.raf(time * 1000); });
gsap.ticker.lagSmoothing(0);

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');
let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

gsap.ticker.add(() => {
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
});

document.querySelectorAll('a, button, .card-3d').forEach(el => {
    el.addEventListener('mouseenter', () => {
        gsap.to(cursor, { width: 50, height: 50, backgroundColor: '#39ff14', duration: 0.3 });
    });
    el.addEventListener('mouseleave', () => {
        gsap.to(cursor, { width: 20, height: 20, backgroundColor: 'transparent', duration: 0.3 });
    });
});

// Horizontal Scroll via GSAP ScrollTrigger
const horizontalSection = document.querySelector('.horizontal-scroll');
const horizontalContainer = document.querySelector('.horizontal-container');

gsap.to(horizontalContainer, {
    x: () => -(horizontalContainer.scrollWidth - window.innerWidth) + "px",
    ease: "none",
    scrollTrigger: {
        trigger: horizontalSection,
        pin: true,
        scrub: 1,
        end: () => "+=" + horizontalContainer.scrollWidth
    }
});

// GSAP Reveal Animations
gsap.utils.toArray('.line').forEach(line => {
    gsap.from(line, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.hero-title',
            start: "top 80%"
        }
    });
});

// Interactive Matrix Canvas
const canvas = document.getElementById('matrix-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dots = [];
const spacing = 30;

for (let x = 0; x < canvas.width; x += spacing) {
    for (let y = 0; y < canvas.height; y += spacing) {
        dots.push({
            x: x,
            y: y,
            baseX: x,
            baseY: y,
            size: Math.random() * 1.5 + 0.5
        });
    }
}

function drawDots() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(57, 255, 20, 0.3)';
    
    dots.forEach(dot => {
        const dx = mouseX - dot.x;
        const dy = mouseY - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        let size = dot.size;
        let opacity = 0.3;

        if (distance < 150) {
            size = dot.size + (150 - distance) * 0.03;
            opacity = 0.8;
            
            // Subtle repel effect
            dot.x = dot.baseX - (dx / distance) * 5;
            dot.y = dot.baseY - (dy / distance) * 5;
        } else {
            dot.x = dot.baseX;
            dot.y = dot.baseY;
        }
        
        ctx.fillStyle = `rgba(57, 255, 20, ${opacity})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
        ctx.fill();
    });
    
    requestAnimationFrame(drawDots);
}

drawDots();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
