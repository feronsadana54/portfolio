import { useEffect } from "react";
import Aos from "aos";

const Smiley = () => {
  useEffect(() => {
    const eyes = document.querySelectorAll(".eye");

    const handleMouseMove = (e) => {
      eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const angle = Math.atan2(
          e.clientY - eyeCenterY,
          e.clientX - eyeCenterX
        );
        const x = Math.cos(angle) * 20;
        const y = Math.sin(angle) * 20;

        eye.style.setProperty("--x", `${x}px`);
        eye.style.setProperty("--y", `${y}px`);
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="face"
      data-aos="fade-up"
    >
      <div className="eyes">
        <div className="eye"></div>
        <div className="eye"></div>
      </div>
    </div>
  );
};

export default Smiley;
