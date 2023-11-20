import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import '../styles/Navigation.css';

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
      tittle: "MENU 1",
      childs: [],
      clicked: true,
      redirection: "/",
    },
    {
      tittle: "MENU 2",
      childs: [],
      clicked: true,
      redirection: "/",
    },
    {
      tittle: "MENU 3",
      childs: [],
      clicked: true,
      redirection: "/",
    },
    {
      tittle: "MENU 4",
      childs: [],
      clicked: true,
      redirection: "/",
    },
    {
      tittle: "MENU 5",
      childs: [],
      clicked: true,
      redirection: "/",
    },
  ];
  const listaElementos = MenuList.map((elemento, index) => (
    <li key={index}>
      <a href="#menu1" onClick={() => setMenuOpen(false)}>
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

        <ul className={`items background-white ${menuOpen ? "open" : ""}`}>{listaElementos}</ul>
      </nav>
    </div>
  );
};
export default Navigation;
