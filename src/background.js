/**
 * Background Particle Animation
 * A lightweight, dependency-free particle system.
 */

(function () {
    const canvas = document.getElementById('bg-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width, height;

    // Configuration
    const PARTICLE_COUNT = 80; // Keep it light
    const CONNECT_DISTANCE = 120; // Distance to draw lines
    const MOUSE_RADIUS = 150; // Interaction radius
    const PARTICLE_SPEED_BASE = 0.3;

    // Color palette (Teal/Indigo tones) - very subtle
    const COLORS = [
        'rgba(100, 255, 218, 0.4)',  // Teal
        'rgba(120, 150, 255, 0.4)',  // Soft Blue
        'rgba(150, 100, 255, 0.3)',  // Soft Indigo
    ];

    let particles = [];

    // Mouse tracking
    const mouse = { x: null, y: null };

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Particle Class
    class Particle {
        constructor() {
            this.init();
        }

        init() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * PARTICLE_SPEED_BASE;
            this.vy = (Math.random() - 0.5) * PARTICLE_SPEED_BASE;
            this.size = Math.random() * 2 + 1; // Size 1-3px
            this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        }

        update() {
            // Basic movement
            this.x += this.vx;
            this.y += this.vy;

            // Mouse Interaction (Repel)
            if (mouse.x != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < MOUSE_RADIUS) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
                    const directionX = forceDirectionX * force * 2; // Repel strength
                    const directionY = forceDirectionY * force * 2;

                    this.x -= directionX;
                    this.y -= directionY;
                }
            }

            // Bounce off edges
            if (this.x < 0 || this.x > width) this.vx = -this.vx;
            if (this.y < 0 || this.y > height) this.vy = -this.vy;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    // Initialization
    function initParticles() {
        particles = [];
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(new Particle());
        }
    }

    // Animation Loop
    function animate() {
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }

        connectParticles();
        requestAnimationFrame(animate);
    }

    // Draw lines between close particles
    function connectParticles() {
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                let dx = particles[a].x - particles[b].x;
                let dy = particles[a].y - particles[b].y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < CONNECT_DISTANCE) {
                    // Opacity based on distance
                    let opacity = 1 - (distance / CONNECT_DISTANCE);
                    ctx.strokeStyle = 'rgba(120, 150, 255, ' + (opacity * 0.15) + ')'; // Very faint
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[a].x, particles[a].y);
                    ctx.lineTo(particles[b].x, particles[b].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Handle Resize
    function handleResize() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        initParticles(); // Re-scatter on resize
    }

    // Start
    handleResize();
    window.addEventListener('resize', handleResize);
    animate();

})();
