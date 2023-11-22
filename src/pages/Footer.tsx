import '../styles/Footer.css';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import GoogleMap from '../components/GoogleMap';

const Footer = () => {

    const imgLogo = 'img/logo.svg';
    const descriptionBusiness = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    const secondSectionTitle = "Contact Info";
    const phone = "(123) 123-1234";
    const email = "example@hotmail.com";
    const schedule = "Monday to Friday<br>08:00 - 20:00"
    const address = "123 Johnson Ave., Apartment<br>101, Victoria BC, CA B8R"

    const thirdSectionTitle = "Location";




    return (
        <div className='footer grid'>
            <div className='column1 flex flex-column'>
                <div className='colInside flex flex-column'>
                    <div className='logo'><img src={imgLogo} /></div>
                    <h4>{descriptionBusiness}</h4>
                    <div className='socialIcons flex flex-row' >
                        <FaSquareFacebook className='icon' />
                        <FaSquareInstagram className='icon' />
                        <FaSquareWhatsapp className='icon' />
                    </div>

                </div>
            </div>
            <div className='column2 flex flex-column'>
                <div className='colInside flex flex-column'>
                <div className='title flex flex-column'>
                    <h2>{secondSectionTitle}</h2>
                    </div>
                    <div className='contactInfo flex flex-row'>
                        <FaPhone className='icon' />
                        <h1>{phone}</h1>
                    </div>

                    <div className='contactInfo flex flex-row'>
                        <IoMdMail className='icon' />
                        <h1>{email}</h1>
                    </div>

                    <div className='contactInfo flex flex-row'>
                        <FaLocationDot className='icon' />
                        <h1 dangerouslySetInnerHTML={{ __html: address }}></h1>
                    </div>

                    <div className='contactInfo flex flex-row'>
                        <IoTime className='icon' />
                        <h1 dangerouslySetInnerHTML={{ __html: schedule }}></h1>
                    </div>
                </div>

            </div>
            <div className='column3 flex flex-column'>
                <div className='colInside flex flex-column'>
                <div className='title flex flex-column'>
                         <h2>{thirdSectionTitle}</h2>
                         </div>
                        <div className='map'>
                        <GoogleMap />                        
                    </div>

                </div>
            </div>
        </div>
    );

}

export default Footer;