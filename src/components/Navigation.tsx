import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";




const Navigation = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const menuIcon = <MdMenu className="menu" size="30px" onClick={()=>setMenuOpen(!menuOpen)}/>;
    const closeIcon = <MdClose className="menu" size="30px" onClick={()=>setMenuOpen(!menuOpen)}/>;



    
    return (
        <div className="header">
            <nav id="navbar" className="container">
            {!menuOpen? menuIcon:closeIcon}                
            <div className="logo">
                <a href="#page-top">
                    <img src="img/logo.svg"  alt="Logo LLC"/>
                </a>{" "}
            </div>
           
            <ul className={`items ${menuOpen ? "open" : ""}`}>
                    <li>
                        <a href="#menu1" onClick={() => setMenuOpen(false)}>
                            MENU 1
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            MENU 2
                        </a>
                    </li>
                    <li>
                        <a href="#services">
                            MENU 3
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio">
                            MENU 4
                        </a>
                    </li>
                    <li>
                        <a href="#testimonials">
                            MENU 5
                        </a>
                    </li>                    
                </ul>
            
            </nav>
    </div>
           
        
    )
}
export default Navigation;