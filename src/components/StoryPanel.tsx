import React from 'react';
import '../styles/StoryPanel.css';

interface StoryPanelProps {
    index?: string;
    title: string;
    descrip: string;
    list?: string[];
    imgSrc?: string
    imgLeft?: boolean;
    moreText?:string;
}


const StoryPanel: React.FC<StoryPanelProps> = ({
    index = "",
    title,
    descrip,
    list=[],
    imgSrc,
    imgLeft = true,
    moreText=""
}) => {


    const imgElement = <img src={imgSrc} />;
    const textElement =
        <div className='story-descrip flex flex-column'>
            <div className='title-border'><h1 dangerouslySetInnerHTML={{ __html: title }} ></h1></div>
            <p className='justify-text'>{descrip}</p>
            <p className='more-text justify-text' dangerouslySetInnerHTML={{ __html: moreText }} ></p>
            {list && (
                <ul className='story-items'>
                    {list.map((item, index) => (
                        <li key={index} className='item'><span>{item}</span></li>
                    ))}
                </ul>
            )}
        </div>

    return (
        <div className={`panel grid content margin-bottom ${imgLeft?'flex-column':'flex-column-reverse'} gap-3rem ${index}`} >
            {imgLeft ? (
                <>
                    {imgElement}
                    {textElement}
                </>
            ) : (
                <>
                    {textElement}
                    {imgElement}
                </>
            )}
        </div>

    )



}

export default StoryPanel;