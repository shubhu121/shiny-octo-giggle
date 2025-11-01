"use client";

import { useEffect, useRef } from "react";

export function AsciiBackground() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    const chars = ["█", "▓", "▒", "░", ">", "<", "/", "\\", "|", "-", "+", "*"];
    const columns = Math.floor(window.innerWidth / 20);
    const rows = Math.floor(window.innerHeight / 30);

    // Clear existing content
    container.innerHTML = "";

    // Create grid of characters
    for (let i = 0; i < rows * columns; i++) {
      const span = document.createElement("span");
      span.textContent = chars[Math.floor(Math.random() * chars.length)];
      span.style.opacity = (Math.random() * 0.3 + 0.1).toString();
      span.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(span);
    }

    // Animate characters
    const interval = setInterval(() => {
      const spans = container.querySelectorAll("span");
      spans.forEach((span) => {
        if (Math.random() > 0.95) {
          span.textContent = chars[Math.floor(Math.random() * chars.length)];
          span.style.opacity = (Math.random() * 0.3 + 0.1).toString();
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={canvasRef}
      className="ascii-grid"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, 20px)",
        gridTemplateRows: "repeat(auto-fill, 30px)",
        fontFamily: "monospace",
        fontSize: "16px",
        color: "var(--color-rust-red)",
        opacity: 0.15,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    />
  );
}
