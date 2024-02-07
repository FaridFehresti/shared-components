import React, { useRef, useEffect } from "react";
import styles from "./Card.module.css"; // Ensure that the CSS module is imported correctly

const Card = () => {
  const cardRef = useRef(null);

  // Add the mousemove event listener when the component mounts
  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const mouseX = e.clientX - rect.left - rect.width / 2;
      const mouseY = e.clientY - rect.top - rect.height / 2;
      const angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
      card.style.setProperty("--start", `${angle}deg`);
    };

    // Attach the event listener
    card.addEventListener("mousemove", handleMouseMove);

    // Remove the event listener on cleanup
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={cardRef} className={styles.card}>
      <div className={styles.glow}></div>
      <h1>Move your mouse cursor over the card.</h1>
      <p>This card uses React and CSS for the glow effect on hover.</p>
    </div>
  );
};

export default Card;
