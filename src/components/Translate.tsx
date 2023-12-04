import { useState, useEffect, useRef, MouseEvent } from "react";
import {useTranslation} from "react-i18next";
import { BsGlobe } from "react-icons/bs";
import ReactCountryFlag from "react-country-flag";
import "../styles/Translate.css";


const Translate = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [t, i18n] = useTranslation("global");

  const languages = [
    {
      title: "English",
      country: "US",
      code: "en",
    },
    {
      title: "Español",
      country: "ES",
      code: "es",
    },
  ];

  const handleToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      "contains" in containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside as any);
    return () => {
      document.removeEventListener("click", handleClickOutside as any);
    };
  }, []);

  const changeLanguage = (code: string) => {
    console.log(`Cambiar a ${code}`);
    i18n.changeLanguage(code);
  };

  const list = languages.map((item, index) => (
    <li key={index}>
      <ReactCountryFlag className="flag" countryCode={item.country} svg onClick={() => changeLanguage(item.code)}/>
      <span onClick={() => changeLanguage(item.code)}>{item.title}</span>
    </li>
  ));
  return (
    <div className="translate-container">
      <div
        ref={containerRef}
        className={`globe-container ${dropdownOpen ? "open" : ""}`}
        onClick={handleToggleDropdown}
      >
         <BsGlobe className="globeIcon"  />
        <ul className={`languages ${dropdownOpen ? "open" : ""}`}>{list}</ul>
      </div>
    </div>
  );
};

export default Translate;