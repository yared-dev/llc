import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Tittle from '../components/Tittle';
import '../styles/AboutUs.css'

const Presentation = () => {

    const [t, i18n] = useTranslation("global");
    const title_ = t("home.sec1.title");
    const toLight_ = t("home.sec1.toLight") as unknown as string[];
  
    const subText = t("home.sec1.subtitle");
    const text = t("home.sec1.text");
    
    const buttonText = t("home.sec1.buttonText");

    const [animationFinished, setAnimationFinished] = useState(false);

  const handleAnimationEnd = () => {
    setAnimationFinished(true);
  };

  useEffect(() => {
    const aboutUsContainer = document.getElementById('aboutUs');
    const leftElement = aboutUsContainer?.querySelector('.left');

    if (leftElement) {
      leftElement.addEventListener('animationend', handleAnimationEnd);

      return () => {
        leftElement.removeEventListener('animationend', handleAnimationEnd);
      };
    }
  }, []);

  const handleClick = () => {
   
    const elemento = document.getElementById('contactUs');
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  };



    return(

        <div id="presentation" className='flex flex-column margin-bottom'>
        
        <div className="sec1 grid gap-3rem">
        <div className={`flex flex-column left ${animationFinished ? 'finished' : ''}`}>
          <div style={{ position: 'relative' }}>
            <div className='decoration background-color-secondary'></div>
            <Tittle tittle={title_} toLight={toLight_} colorLight='color-secondary' style={{ textTransform: 'uppercase' }}/>
            <h1>{subText}</h1>
            <h4>{text}</h4><br></br>
          </div>
          
          <button onClick={handleClick} className='button_container color-secondary background-white'>{buttonText}</button>
        </div>
        <div className='flex flex-column'>
          <div className='background-image ImageSec1'></div>
        </div>
      </div>
      
      <div className='grid gap-3rem width-100'>
          <div className='separator background-color-secondary'></div>
        </div>
  
        </div>
    );

}

export default Presentation;