import { useTranslation } from 'react-i18next';

import '../styles/AboutUs.css'

interface FeatureStructure {
  title: string;
  description: string;
}


const AboutUs = () => {

  const [t, i18n] = useTranslation("global");



  const blocks = t("home.sec2") as unknown as FeatureStructure[];



  
  return (
    <div id="aboutUs" className='flex flex-column margin-bottom'>
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
