import React from 'react';

interface TittleProps {
  tittle: string;
  toLight: string[];
  colorLight?: string;
}

const Tittle: React.FC<TittleProps> = ({
    tittle,
    toLight,    
    colorLight,
}) => {

    let text = tittle;

    toLight.forEach(word => {
        const spanLight = `<span class="${colorLight}">${word}</span>`;
        text = text.replace(new RegExp(`\\b${word}\\b`, 'gi'), spanLight);
    });

  
  return (
    <h1  dangerouslySetInnerHTML={{__html: text}} />
  );
};

export default Tittle;
