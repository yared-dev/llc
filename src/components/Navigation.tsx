import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import Translate from './Translate';
import "../styles/Navigation.css";

import { useTranslation } from 'react-i18next';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [t, i18n] = useTranslation("global");

  const menuIcon = (
    <MdMenu
      className="menu"
      size="30px"
      onClick={() => setMenuOpen(!menuOpen)}
    />
  );
  const closeIcon = (
    <MdClose
      className="menu"
      size="30px"
      onClick={() => setMenuOpen(!menuOpen)}
    />
  );

  const MenuList = [
    {
      title: t("nav.0"),
      childs: [],
      clicked: true,
      redirection: "#aboutUs",
    },
    {
      title: t("nav.1"),
      childs: [],
      clicked: true,
      redirection: "#ourServices",
    },
    {
      title:  t("nav.2"),
      childs: [],
      clicked: true,
      redirection: "#myStory",
    },
    {
      title: t("nav.3"),
      childs: [],
      clicked: true,
      redirection: "#contactUs",
    },
    
  ];
  const buttonSlide = (index: string, href: string) => {
    const ref = document.getElementById(index)?.click();
  };
  const listaElementos = MenuList.map((elemento, index) => (
    <li
      key={index}
      onClick={() => buttonSlide("#" + index.toString(), elemento.redirection)}
    >
      <a
        id={"#" + index.toString()}
        href={elemento.redirection}
        onClick={() => setMenuOpen(false)}
      >
        {elemento.title}
      </a>
    </li>
  ));
  return (
    <div className="header">
       <Translate/>
      <nav id="navbar">
        {!menuOpen ? menuIcon : closeIcon}
        <div className="logo">
          <a href="#page-top">
            <img src="img/logo.png" alt="Logo LLC" />
          </a>{" "}
        </div>

        <ul className={`items background-white ${menuOpen ? "open" : ""}`}>
          {listaElementos}
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
