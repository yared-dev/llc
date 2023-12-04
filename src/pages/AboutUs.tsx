import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Tittle from '../components/Tittle';

import '../styles/AboutUs.css'

interface FeatureStructure {
  title: string;
  description: string;
}


const AboutUs = () => {

  const [t, i18n] = useTranslation("global");

  const text_ = t("home.sec1.title");
  const toLight_ = t("home.sec1.toLight") as unknown as string[];

  const subText = t("home.sec1.subtitle");
  const buttonText = t("home.sec1.buttonText");

  const blocks = t("home.sec2") as unknown as FeatureStructure[];



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

  return (
    <div id="aboutUs" className='flex flex-column margin-bottom'>
      <div className="sec1 grid">
        <div className={`flex flex-column left ${animationFinished ? 'finished' : ''}`}>
          <div style={{ position: 'relative' }}>
            <div className='decoration background-color-secondary'></div>
            <Tittle tittle={text_} toLight={toLight_} colorLight='color-secondary' />
            <h4>{subText}</h4>
          </div>
          <h4></h4>
          <button className='button_container color-secondary background-white'>{buttonText}</button>
        </div>
        <div className='flex flex-column'>
          <div className='background-image ImageSec1'></div>
        </div>
      </div>
      <div className='grid width-100'>
        <div className='separator background-color-secondary'></div>
      </div>

      <div className="sec2 grid content">
        <div className='flex flex-column left'>
          <div className='background-image ImageSec2'></div>
        </div>
        <div className='right flex flex-column'>
          {blocks.map((block) => (
            <div key={block.title}>
              <h2>{block.title}</h2>
              <p>{block.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
