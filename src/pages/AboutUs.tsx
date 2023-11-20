
import Tittle from '../components/Tittle';

import '../styles/AboutUs.css'


const AboutUs = () => {

    const text_ = '"Then and Now… I am commited to serve"';
    const toLight_ = ["I am", "to serve"];
    const subText = "Isabel Gonzalez Eforce Us Navy Reserve";

    const blocks = [
        {
            title: "Expertise",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
            title: "Predictability",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        },
        {
            title: "Innovation",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
        }
    ];

    const metrics = [
        {
            stringNumber: "0.00",
            text: "Lorem ipsum dolor sit amet"
        },
        {
            stringNumber: "100+",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            stringNumber: "200+",
            text: "Lorem ipsum dolor sit amet"
        },
        {
            stringNumber: "2k +",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            stringNumber: "2k +",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            stringNumber: "2k +",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        }
    ];
   
    return (

        <div id="aboutUs" className='flex flex-column'>
            <div className="sec1 grid">
                <div className='flex flex-column left'>
                    <div style={{ position: 'relative' }}>
                        <div className='decoration background-color-secondary'></div>
                        <Tittle tittle={text_} toLight={toLight_} colorLight='color-secondary' />
                        <h4>{subText}</h4>
                    </div>
                    <h4></h4>
                    <button className='button_container color-secondary background-white'>Click me</button>
                </div>
                <div className='flex flex-column'>
                    <div className='background-image ImageSec1'></div>
                </div>
            </div>
            <div className='grid width-100'>
                <div className='separator background-color-secondary'></div>
            </div>

            <div className="sec2 grid content margin-bottom">
                <div className='flex flex-column left'>
                    <div className='background-image ImageSec2'></div>
                </div>
                <div className='right flex flex-column'>
                    {blocks.map((block) => (
                        <div key={block.title}>
                            <h2>{block.title}</h2>
                            <p>{block.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="sec3 grid content margin-bottom">
            {metrics.map((metric, index) => (
                        <div key={index} className='metric flex flex-column'>
                            <h2>{metric.stringNumber}</h2>
                            <p>{metric.text}</p>
                        </div>
                    ))}
            </div>

        </div>
    )
}

export default AboutUs;
