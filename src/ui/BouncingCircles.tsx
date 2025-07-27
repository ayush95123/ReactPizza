import React, { useEffect, useRef, type JSX } from "react";

interface Circle {
  x: number;
  y: number;
  dx: number;
  dy: number;
  r: number;
  update: () => void;
  draw: () => void;
}

export default function BouncingCircles(): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

    const dpr = window.devicePixelRatio || 1;

    // Handle resize
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // scale drawing context
    };

    resizeCanvas();

    const total = 12;
    const circles: Circle[] = [];

    function getRandomRadius(min = 3, max = 8): number {
      return Math.random() * (max - min) + min;
    }

    function getRandomColor(): string {
      const colors = ["#edbe31", "#b8312f"]; // yellow and red
      return colors[Math.floor(Math.random() * colors.length)];
    }

    class Ball implements Circle {
      x: number;
      y: number;
      dx: number;
      dy: number;
      r: number;
      color: string;
      originalSpeed: number;
      targetSpeed: number;
      speedRestoreStart: number | null;

      constructor(
        x: number,
        y: number,
        dx: number,
        dy: number,
        r: number,
        color: string
      ) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.r = r;
        this.color = color;
        this.originalSpeed = Math.hypot(dx, dy);
        this.targetSpeed = this.originalSpeed;
        this.speedRestoreStart = null;
      }

      draw() {
        if (!ctx) return;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
      }

      update() {
        if (!canvas) return;

        // Bounce on walls
        if (this.x + this.r > canvas.width || this.x - this.r < 0)
          this.dx *= -1;
        if (this.y + this.r > canvas.height || this.y - this.r < 0)
          this.dy *= -1;

        // Reflect from mouse
        const dist = Math.hypot(
          this.x - mouse.current.x,
          this.y - mouse.current.y
        );
        if (dist < this.r + 30) {
          const angle = Math.atan2(
            this.y - mouse.current.y,
            this.x - mouse.current.x
          );
          const boostedSpeed = this.originalSpeed * 2;

          this.dx = Math.cos(angle) * boostedSpeed;
          this.dy = Math.sin(angle) * boostedSpeed;

          this.targetSpeed = this.originalSpeed;
          this.speedRestoreStart = performance.now();
        }

        // Handle deacceleration
        if (this.speedRestoreStart !== null) {
          const elapsed = performance.now() - this.speedRestoreStart;
          const duration = 5000; // 2 seconds
          const t = Math.min(elapsed / duration, 1); // 0 to 1

          const currentSpeed = Math.hypot(this.dx, this.dy);
          const newSpeed = currentSpeed + (this.targetSpeed - currentSpeed) * t;

          const angle = Math.atan2(this.dy, this.dx);
          this.dx = Math.cos(angle) * newSpeed;
          this.dy = Math.sin(angle) * newSpeed;

          if (t >= 1) {
            this.speedRestoreStart = null;
          }
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
      }
    }

    // Create circles
    for (let i = 0; i < total; i++) {
      const r = getRandomRadius();
      const x = Math.random() * (canvas.width - 2 * r) + r;
      const y = Math.random() * (canvas.height - 2 * r) + r;
      const dx = (Math.random() - 0.5) * 2;
      const dy = (Math.random() - 0.5) * 2;
      const color = getRandomColor();

      circles.push(new Ball(x, y, dx, dy, r, color));
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      circles.forEach((circle) => circle.update());
      requestAnimationFrame(animate);
    };

    animate();

    // Track mouse
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", onMouseMove);

    // Resize observer to handle canvas resizing
    if (!window.ResizeObserver) {
      console.warn("ResizeObserver is not supported in this browser.");
      return;
    }
    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(canvas);

    return () => {
      observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-20"
    />
  );
}
