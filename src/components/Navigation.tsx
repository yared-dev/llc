import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import "../styles/Navigation.css";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
      tittle: "About Us",
      childs: [],
      clicked: true,
      redirection: "#aboutUs",
    },
    {
      tittle: "Our Services",
      childs: [],
      clicked: true,
      redirection: "#ourServices",
    },
    {
      tittle: "My Story",
      childs: [],
      clicked: true,
      redirection: "#myStory",
    },
    {
      tittle: "Contact Us",
      childs: [],
      clicked: true,
      redirection: "#",
    },
    {
      tittle: "MENU 5",
      childs: [],
      clicked: true,
      redirection: "#",
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
        {elemento.tittle}
      </a>
    </li>
  ));
  return (
    <div className="header">
      <nav id="navbar" className="container">
        {!menuOpen ? menuIcon : closeIcon}
        <div className="logo">
          <a href="#page-top">
            <img src="img/logo.svg" alt="Logo LLC" />
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
