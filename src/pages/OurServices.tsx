import ServiceItem from '../components/ServiceItem';
import Tittle from '../components/Tittle';
import '../styles/OurServices.css'

const OurServices = () => {

    const title_ = "Our Services";
    const text_ = '"Ready To Serve, Ready To Guide and Never Quit." Pongo mi Empresa al Servicio de Tu negocio.'
    const toLight_ = ["Pongo mi", "tu Negocio"];

    return(
        <div id="ourServices" className="flex flex-column">
            <div className="sec1 content margin-bottom">
                <h1 className='color-primary'>{title_}</h1>
                <div className='separator background-color-secondary flex-1'></div>
            </div>
            <div className="sec2 content color-primary margin-bottom">
                <Tittle tittle={text_} toLight={toLight_} colorLight='color-secondary'/>
                <div className='background-color-secondary flex-1'></div>
            </div>
            <div className="sec3 grid">
                <ServiceItem tittle='nada' descrip='asdasdasd'/>

                <div className='service-item'></div>
                <div className='service-item'></div>
                <div className='service-item'></div>
                <div className='service-item'></div>
            </div>
        </div>
    )
}

export default OurServices;