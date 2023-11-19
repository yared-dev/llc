import Tittle from '../components/Tittle';
import '../styles/Navigation.css';
import '../styles/Us.css'


const Us = () => {

    const text_ = '"Then and Now… I am commited to serve"';
    const toLight_ = ["I am", "to serve"];
    const subText = "Isabel Gonzalez Eforce Us Navy Reserve";

    return (

        <div id="us" className="flex-column color-primary">
            <div className='fullscreen gap-p1-secction'>
                <div className="container sec1">
                    <div className='column flex-column'>
                        <Tittle tittle={text_} toLight={toLight_} colorLight='color-secondary' />
                        <h4>{subText}</h4>
                    </div>
                    <div className='column background-image ImageAboutUs'>
                       <img />
                    </div>
                </div>
            </div>
            <div className="fullscreen">
                <div className="container sec2 gap-p1-secction">
                    <h4></h4>
                    <div className="column flex-column">
                        <div className="separator background-green"></div>
                        <div className="content">
                            <h2>Our customized solutions offer clients the lowest total cost.</h2>
                            <p>You care about safety. You care about cost. You care about benchmark-driven results.</p>
                        </div>
                    </div>

                    <div className="column flex-column">
                        <div className="separator background-white"></div>
                        <div className="content right">
                            <p>RTI is not just a global industrial solutions provider, we are a shutdown services partner. Working with us, you get big picture thinking with detailed technical execution to improve performance and profitability.</p>
                        </div>
                    </div>
                    <h4></h4>
                </div>
            </div>

        </div>
    );
};

export default Us;
