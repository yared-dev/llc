import '../styles/Navigation.css';
import '../styles/Pag1.css'

interface Pag1Props {
    title: string;
    body: string;
}

const Pag1: React.FC<Pag1Props> = ({ title, body }) => {
    return (

        <div id="menu1" className="flex-column">
            <div className='fullscreen background-image backImagePag1 gap-p1-secction'>
                <div className="sec1 container flex-column">
                    <h4>{title}</h4>
                    <h1>{body}</h1>
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

export default Pag1;
