import React from 'react';
import '../styles/Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  type: string;
  name:string;
  colorLabel: string;
  borderColor: string;
  error: boolean;
  errorLabel: string;
  current?:number;
}


const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  colorLabel,
  borderColor,
  error,
  errorLabel,
  current,
  ...props
}) => {
  
  const class_ = `${error? 'border-color-red' : `border-${borderColor}`}`;
  const classLblError = `error-label color-red ${error? 'show' : 'hide'}`;

  let input = null;
  
  let inputTextArea = null;

  input = (
    <input
      className={class_}
      type={type}
      name={name}
      {...props}
    />
  );

  if(type==='textarea'){
    input = null;
    inputTextArea = type === 'textarea' ?
    <div className='position-relative flex'>
        <textarea rows={5} cols={33} className={class_ + " flex-1"} name={name} {...props} />
        <label className='currentLength'>{`${current+""}/${props.maxLength}`}</label>
    </div> : null;
  }
  
  return (
    <div className={`input-container flex flex-column ${colorLabel} ${type==='textarea'?"position-relative":""}`}>
      <label>{label}</label>
        {input}{inputTextArea}
      <label className={classLblError}>{errorLabel}</label>
    </div>
  );
};

export default Input;
