import '../styles/Footer.css';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import GoogleMap from '../components/GoogleMap';
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const[t, i18n] = useTranslation("global");
    const imgLogo = 'img/logo.png';
    const descriptionBusiness =  t("Footer.businessDecrption");

    const secondSectionTitle = t("Footer.contactInfo.title");
    const contact = [
        {
            name: "Isabel González",
            phone: "713-281-8223"
        },
        {
            name: "Carolina González",
            phone: "832-247-7056"
        },
        {
            name: "Carlos Muñoz",
            phone: "347-873-7347"
        }
    ]



    const email = "info.communityinterest@gmail.com";
    const schedule = `${t("Footer.contactInfo.schedule")}<br>08:00 - 20:00`
    const address = "23405 W Fernhurst Dr No.812<br>Katy, TX 77494"

    const thirdSectionTitle = t("Footer.location");

    const address_google = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.0420916032213!2d-95.7812199!3d29.776424399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864126dd182754bf%3A0x71a4c41d9650616a!2s23405%20W%20Fernhurst%20Dr%2C%20Katy%2C%20TX%2077494%2C%20EE.%20UU.!5e0!3m2!1ses-419!2spe!4v1701660541831!5m2!1ses-419!2spe";


    const link_fb = "https://www.facebook.com/communityinterest";
    const link_ig = "https://www.instagram.com/communityinterest/";
    const link_wsp = "https://web.whatsapp.com/send?phone=17132818223";
    const link_lIn = "https://www.linkedin.com/in/isabel-gonzalez-7ba4242b1/";


    return (
        <div className='footer grid'>
            <div className='column1 flex flex-column'>
                <div className='colInside flex flex-column'>
                    <div className='logo'><img src={imgLogo} /></div>
                    <h4>{descriptionBusiness}</h4>
                    <div className='socialIcons flex flex-row' >
                        <a href={link_fb} target="blank"><FaSquareFacebook className='icon' /></a>
                        <a href={link_ig} target="blank"><FaSquareInstagram className='icon' /></a>
                        <a href={link_wsp} target="blank"><FaSquareWhatsapp className='icon' /></a>
                        <a href={link_lIn} target="blank"><FaLinkedin className='icon' /></a>
                    </div>

                </div>
            </div>
            <div className='column2 flex flex-column'>
                <div className='colInside flex flex-column'>
                    <div className='title flex flex-column'>
                        <h2>{secondSectionTitle}</h2>
                    </div>
                    <div className='contactInfo'>
                        <FaPhone className='icon' />
                        <div className='phones-container'>
                            {contact.map((item) => (
                                <>
                                    <h1>{item.name + ":"}</h1>
                                    <h1>{item.phone}</h1>
                                </>
                            ))}
                        </div>


                        <IoMdMail className='icon' />
                        <h1>{email}</h1>
                        <FaLocationDot className='icon' />
                        <h1 dangerouslySetInnerHTML={{ __html: address }}></h1>
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
                        <GoogleMap src={address_google} />

                    </div>

                </div>
            </div>
        </div>
    );

}

export default Footer;