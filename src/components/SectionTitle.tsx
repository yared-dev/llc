import React from 'react';
import '../styles/SectionTitle.css'

interface SectionTitleProps {
    title: string;
    colorTitle: string;
    colorSeparator: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
    title,
    colorTitle,
    colorSeparator
}) => {

    return (
           <div className="titleSection content margin-bottom flex">
                <h1 className={colorTitle}>{title}</h1>
                <div className={`separator ${colorSeparator} flex-1`}></div>
            </div>
    )
}

export default SectionTitle;