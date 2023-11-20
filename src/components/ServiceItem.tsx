import React, { useState, MouseEvent } from 'react';
import '../styles/ServiceItem.css'

interface ServiceItemProps {
    title: string;
    descrip: string;
    span?: string;
    imgSrc?: string
    backColor?:string;
    textColor?:string;
    spanColor?:string;
}


const ServiceItem: React.FC<ServiceItemProps> = ({
    title,
    descrip,
    span,
    imgSrc,
    backColor,
    textColor,
    spanColor
}) => {

    const backgroundStyle = imgSrc
        ? { backgroundImage: `linear-gradient(180deg, rgba(23, 24, 25, 0.6) 100%, rgba(0, 0, 0, 0.6) 100%), url(${imgSrc})` }
        : {};

    return (
        <div className="service-item">
            <div className="item-container">
                <div className="front flex background-image" style={backgroundStyle}>
                  <div className='title-box'>
                  <div className="service-title">
                        <h3>{title}</h3>
                    </div>
                  </div>

                </div>
                <div className={`back flex flex-column ${backColor} ${textColor}`}>
                    <h1>{title}</h1>
                    <p>{descrip}</p>
                    <h4 className={spanColor}>
                        <a>{span}</a>
                        </h4>
                </div>
            </div>
        </div>
    )
}

export default ServiceItem;