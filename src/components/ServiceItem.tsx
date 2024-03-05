import React, { useState, MouseEvent, useRef, useEffect } from 'react';
import '../styles/ServiceItem.css'

interface ServiceItemProps {
    title: string;
    descrip: string;
    moreText?: string;
    span_state_0?: string;
    span_state_1?: string;
    imgSrc?: string
    backColor?: string;
    textColor?: string;
    spanColor?: string;
    list?: string[];
}


const ServiceItem: React.FC<ServiceItemProps> = ({
    title,
    descrip,
    moreText = null,
    span_state_0 = null,
    span_state_1 = null,
    imgSrc,
    backColor,
    textColor,
    spanColor,
    list = null
}) => {

    const [expanded, setExpanded] = useState(false);
    const [height, setHeight] = useState<number | null>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const backgroundStyle = imgSrc
        ? { backgroundImage: `linear-gradient(180deg, rgba(23, 24, 25, 0.6) 100%, rgba(0, 0, 0, 0.6) 100%), url(${imgSrc})` }
        : {};


    useEffect(() => {
        setHeight(expanded ? contentRef.current?.scrollHeight || null : null);
    }, [expanded]);

    const handleButtonClick = () => {
        if (moreText || list) {
            setExpanded(!expanded);
        }

        console.log(contentRef.current);

    };

    const handleMouseLeave = () => {
        if (expanded) {
            setExpanded(false);
        }
    };



    return (
        <div
            className="service-item"
            style={{ height: height ? `${height}px` : '20rem' }}
            onMouseLeave={handleMouseLeave}
        >
            <div className="item-container">
                <div className="front flex background-image" style={backgroundStyle}>
                    <div className='title-box'>
                        <div className="service-title">
                            <h3>{title}</h3>
                        </div>
                    </div>

                </div>
                <div className={`back flex flex-column ${backColor} ${textColor}`}
                    ref={contentRef}
                >
                    <h1>{title}</h1>
                    <p>{descrip}</p>
                    <div className='more-text' style={{ display: (expanded) ? 'block' : 'none' }}>
                        <p>{moreText}</p>
                        {list && list.length > 0 && (
                            <ul>
                                {list.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </div><button
                        className={spanColor}
                        onClick={handleButtonClick}
                        style={{ visibility: moreText ? 'visible' : 'hidden' }}
                    >
                        {!expanded ? span_state_0 : span_state_1}
                    </button>



                </div>
            </div>
        </div>
    )
}

export default ServiceItem;