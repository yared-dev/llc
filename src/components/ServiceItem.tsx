import React from 'react';
import '../styles/ServiceItem.css'

interface ServiceItemProps {
    tittle: string;
    descrip: string;
    span?: string;
    imgSrc?: string
  }


const ServiceItem: React.FC<ServiceItemProps> = ({
    tittle,
    descrip,    
    span,
    imgSrc
}) => {
    return(<div className='service-item'>
        <div className='serv-title'>
            <h3>TITULO NRO1 TITULO NRO1</h3>
            
        </div>
    </div>)

}

export default ServiceItem;