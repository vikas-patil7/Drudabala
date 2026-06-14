import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => setPosition({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{
        background: `radial-gradient(520px circle at ${position.x}px ${position.y}px, rgba(217, 174, 74, 0.10), transparent 45%)`,
      }}
    />
  );
}
