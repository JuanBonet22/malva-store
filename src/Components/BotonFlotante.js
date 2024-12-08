import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import styles from "./BotonFlotante.module.css";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar botón de scroll arriba cuando se hace scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.floatingButtons}>
      
      {/* Botón de scroll arriba */}
      {isVisible && (
        <button onClick={scrollToTop} className={styles.scrollToTop}>
          <FaArrowUp size={24} />
        </button>
      )}
      
      {/* Botón de WhatsApp */}
      <a
        href=" " 
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
      >
        <FaWhatsapp size={24} />
      </a>

      
    </div>
  );
};

export default FloatingButtons;
