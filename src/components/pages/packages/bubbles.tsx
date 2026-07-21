'use client'
import { useEffect, useRef } from "react";

function SeaParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    let width: number, height: number;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const bubbles: Bubble[] = [];
        let animId: number;
        let lastTime = performance.now();
        let scrollSpeed = 1;
        let targetScrollSpeed = 3;

        const resize = () => {
            width = canvas.width = canvas.offsetWidth;
            height = canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

            // Speed increases with scroll (1x to 4x)
            targetScrollSpeed = 1 + scrollProgress * 3;
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        class Bubble {
            x = 0; y = 0; size = 0; speed = 0;
            wobble = 0; wobbleSpeed = 0; opacity = 0;
            baseSpeed = 0;

            constructor() {
                this.reset();
                this.y = Math.random() * height;
            }

            reset() {
                this.x = Math.random() * width;
                this.y = height + Math.random() * 100;
                this.size = Math.random() * 4 + 1;
                this.baseSpeed = Math.random() * 0.8 + 0.4;
                this.speed = this.baseSpeed;
                this.wobble = Math.random() * Math.PI * 2;
                this.wobbleSpeed = Math.random() * 0.02 + 0.01;
                this.opacity = Math.random() * 0.3 + 0.05;
            }

            update(delta: number, speedMultiplier: number) {
                this.y -= this.baseSpeed * speedMultiplier * delta;
                this.wobble += this.wobbleSpeed * delta;
                this.x += Math.sin(this.wobble) * 0.5 * delta;
                if (this.y < -10) this.reset();
            }
        }

        const baseCount = 150;
        const maxExtra = 350;
        let activeCount = baseCount;

        for (let i = 0; i < baseCount + maxExtra; i++) {
            const b = new Bubble();
            if (i >= baseCount) b.y = height + 1000;
            bubbles.push(b);
        }

        const animate = (time: number) => {
            const delta = (time - lastTime) / 16.667;
            lastTime = time;

            // Smooth speed transition
            scrollSpeed += (targetScrollSpeed - scrollSpeed) * 0.1;

            // Update active count based on scroll speed
            const scrollProgress = (scrollSpeed - 1) / 3;
            activeCount = baseCount + Math.floor(scrollProgress * maxExtra);

            ctx.clearRect(0, 0, width, height);

            for (let i = 0; i < activeCount; i++) {
                bubbles[i].update(delta, scrollSpeed);
            }

            ctx.fillStyle = "rgba(180, 230, 255, 0.2)";
            ctx.beginPath();
            for (let i = 0; i < activeCount; i++) {
                const b = bubbles[i];
                ctx.moveTo(b.x + b.size, b.y);
                ctx.arc(b.x, b.y, b.size, 0, Math.PI * 2);
            }
            ctx.fill();

            ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
            ctx.beginPath();
            for (let i = 0; i < activeCount; i++) {
                const b = bubbles[i];
                const hx = b.x - b.size * 0.4;
                const hy = b.y - b.size * 0.4;
                const hs = b.size * 0.4;
                ctx.moveTo(hx + hs, hy);
                ctx.arc(hx, hy, hs, 0, Math.PI * 2);
            }
            ctx.fill();

            animId = requestAnimationFrame(animate);
        };

        animId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-10 pointer-events-none"
            style={{ width: "100%", height: "100%" }}
        />
    );
}

export default SeaParticles;