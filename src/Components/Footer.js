import React, { useState } from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [selectedCategory, setSelectedCategory] = useState(""); // Controla la selección

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value); // Actualiza la selección
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Síguenos */}
        <div className={styles.section}>
          <h5 className={styles.title}>Síguenos</h5>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>

        {/* Servicio al cliente */}
        <div className={styles.section}>
          <h5 className={styles.title}>Servicio al Cliente</h5>
          <ul className={styles.links}>
            <li>
              <a href="/contacto">Contáctanos/PQRS</a>
            </li>
            <li>
              <a href="/faq">Recoge en tienda</a>
            </li>
            <li>
              <a href="/terminos">Localizador de tiendas</a>
            </li>
          </ul>
        </div>

        {/* Quiénes somos */}
        <div className={styles.section}>
          <h5 className={styles.title}>Quiénes Somos</h5>
          <p>
            Nuestro equipo
          </p>
          
        </div>

        {/* Categoría y Suscripción */}
        <div className={styles.section}>
        
          <h5 className={styles.title}>Suscríbete a nuestro Newsletter</h5>
          <h5 className={styles.title}>
            Regístrate para recibir 10% de descuento en tu primera orden y ofertas exclusivas a lo largo del año.
          </h5>
          <form className={styles.subscribeForm}>

          <h5 className={styles.title}>Selecciona tu categoría:</h5>
          <div className={styles.categoryOptions}>
            <label>
              <input
                type="radio"
                name="category"
                value="Mujer"
                checked={selectedCategory === "Mujer"}
                onChange={handleCategoryChange}
                className={styles.radioInput}
              />
              Mujer
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="Hombre"
                checked={selectedCategory === "Hombre"}
                onChange={handleCategoryChange}
                className={styles.radioInput}
              />
              Hombre
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="Niño"
                checked={selectedCategory === "Niño"}
                onChange={handleCategoryChange}
                className={styles.radioInput}
              />
              Niño
            </label>
          </div>

            <input
              type="email"
              placeholder="Ingresa tu correo"
              className={styles.input}
              required
            />
            <button type="submit" className={styles.subscribeButton}>
              Suscribirme
            </button>
          </form>
        </div>
      </div>

      <div className={styles.copy}>
        <p>&copy; {new Date().getFullYear()} MALVA ONLINE. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
