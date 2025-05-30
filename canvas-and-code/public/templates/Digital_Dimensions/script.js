document.addEventListener("DOMContentLoaded", () => {
    const text = "Welcome to Digital Dimensions.";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            document.getElementById("typingText").innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 80);
        }
    }
    typeWriter();

    const canvas = document.getElementById("bgCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray = [];

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgba(0, 240, 255, 0.8)";
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#00f0ff";
            ctx.fill();
        }
    }

    function initParticles() {
        particlesArray = [];
        for (let i = 0; i < 100; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let particle of particlesArray) {
            particle.update();
            particle.draw();
        }
        requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    window.addEventListener("resize", () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
    });

    // Scroll to About section
    document.querySelector(".enter-btn").addEventListener("click", () => {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    });

    // About subtitle typing
    const aboutSubtitleText = "Creative Developer. Code Artist. Vision Builder.";
    let j = 0;
    let subtitleStarted = false;

    function typeAboutSubtitle() {
        const subtitleEl = document.getElementById("about-subtitle");
        if (j < aboutSubtitleText.length) {
            subtitleEl.innerHTML += aboutSubtitleText.charAt(j);
            j++;
            setTimeout(typeAboutSubtitle, 50);
        }
    }

    // Scroll logic for both About animation and Back-to-top visibility
    const backToTopBtn = document.getElementById("backToTop");
    const aboutContainer = document.querySelector(".about-container");

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;

        // Show/hide Back to Top button
        if (scrollY > 300) {
            backToTopBtn.classList.add("visible");
        } else {
            backToTopBtn.classList.remove("visible");
        }

        // Reveal About section
        const triggerPoint = window.innerHeight * 0.8;
        if (
            aboutContainer &&
            aboutContainer.getBoundingClientRect().top < triggerPoint &&
            !aboutContainer.classList.contains("visible")
        ) {
            aboutContainer.classList.add("visible");
            typeAboutSubtitle();
        }
    });

    // ✅ Scroll to top when button is clicked
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
