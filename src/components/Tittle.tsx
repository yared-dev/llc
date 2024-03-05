import React, { CSSProperties } from 'react';

interface TittleProps {
  tittle: string;
  toLight?: string[];
  colorLight?: string;
  style?: CSSProperties;
}

const Tittle: React.FC<TittleProps> = ({
  tittle,
  toLight,
  colorLight,
  style
}) => {
  let text = tittle;

  if (Array.isArray(toLight)) {
    toLight.forEach(word => {
        const spanLight = `<span class="${colorLight}">${word}</span>`;
        text = text.replace(new RegExp(`\\b${word}\\b`, 'gi'), spanLight);
    });
}

  return (
      <h1 dangerouslySetInnerHTML={{ __html: text }} style={style}/>
  );
};

export default Tittle;

