import ServiceItem from '../components/ServiceItem';
import Tittle from '../components/Tittle';
import '../styles/OurServices.css'



const OurServices = () => {

    const title_ = "Our Services";
    const text_ = '"Ready To Serve, Ready To Guide and Never Quit." Pongo mi Empresa al Servicio de Tu negocio.'
    const toLight_ = ["Pongo mi", "tu Negocio"];

    const serviceItems = [
        {
            title: "Optimize Performance, Cut Costs",
            descrip: "Streamline operations, boost efficiency, and reduce expenses with our expert solutions",
            imgSrc: "/img/pages/OurServices/service4.jpg"
        },
        {
            title: "Professional Cleaning Services",
            descrip: "Impeccable cleaning for commercial and residential spaces. Trust our reliable services for a spotless environment.",
            imgSrc: "/img/pages/OurServices/service2.jpg"
        },
        {
            title: "Construction and Building Solutions",
            descrip: "Comprehensive services for construction and building projects. From concept to completion, we deliver excellence in every phase.",
            imgSrc: "/img/pages/OurServices/service1.jpg"
        },
    ]

    return (
        <div id="ourServices" className="flex flex-column">
            <div className="sec1 content margin-bottom flex">
                <h1 className='color-primary'>{title_}</h1>
                <div className='separator background-color-secondary flex-1'></div>
            </div>
            <div className="sec2 content color-primary margin-bottom">
                <Tittle tittle={text_} toLight={toLight_} colorLight='color-secondary' />
                <div className='background-color-secondary flex-1'></div>
            </div>
            <div className="sec3 grid width-100 margin-bottom">
                {serviceItems.map((item, index) => (
                    <ServiceItem
                        title={item.title}
                        descrip={item.descrip}
                        span={"Read More..."}
                        imgSrc={item.imgSrc}
                        backColor={index % 2 == 0 ? "background-color-primary" : "background-white"}
                        textColor={index % 2 == 0 ?'color-white':"color-primary"}
                        spanColor={'color-secondary'}
                    />
                ))}

            </div>
        </div>
    )
}

export default OurServices;