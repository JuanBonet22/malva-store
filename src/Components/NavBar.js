import React, { useState } from "react";
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useScrollPosition } from "../Hooks/scrollPosition";

const NavBar = () => {
  const [navBarOpen, setNavBarOpen] = useState(false);

  const links = [
   
    { id: 1, link: "Mujer", hasSubmenu: true, submenu: ["Subcategoria 1", "Subcategoria 2"] },
    { id: 2, link: "Hombre", hasSubmenu: true, submenu: ["Subcategoria 3", "Subcategoria 4"] },
    { id: 3, link: "Global", hasSubmenu: true, submenu: ["Subcategoria 5", "Subcategoria 6"] }
  ];

  const scrollPosition = useScrollPosition();

  return (
    <div
      className={
        navBarOpen
          ? styles.navOpen
          : scrollPosition > 0
          ? styles.navOnScroll
          : styles.navBar
      }
    >
      {/* icono menú hamburguesa */}
      {!navBarOpen ? (
        <AiOutlineMenu
          className={styles.hamburgerIcon}
          onClick={() => setNavBarOpen(true)}
          size={25}
          color="#ffff"
        />
      ) : (
        <AiOutlineClose
          className={styles.hamburgerIcon}
          onClick={() => setNavBarOpen(false)}
          size={25}
          color="#000"
        />
      )}

      {/* Logo */}
      {!navBarOpen && <p className={styles.logo}>MALVA</p>}

      {/* Menú desplegable */}
      {navBarOpen && (
        <ul className={styles.linksContainer}>
          {links.map(({ id, link, hasSubmenu, submenu }) => (
            <li key={id} className={styles.category}>
              <Link
                onClick={() => setNavBarOpen(false)}
                to={link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {link === "HowWeWork" ? "How we work" : link}
              </Link>

              {/* Mostrar submenú si tiene */}
              {hasSubmenu && (
                <ul className={styles.submenu}>
                  {submenu.map((sub, index) => (
                    <li key={index}>
                      <Link to={sub} className={styles.submenuLink} onClick={() => setNavBarOpen(false)}>
                        {sub}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}

              <div className={styles.border}></div>
            </li>
          ))}
          
        </ul>
      )}
    </div>
  );
};

export default NavBar;
