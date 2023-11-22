import { ChangeEvent, useState} from 'react';
import Input from '../components/Input';
import SectionTitle from '../components/SectionTitle';
import '../styles/ContactUs.css';

function formatPhoneNumber(value: string) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}


const ContactUs = () => {
    const title_ = "Contact Us";
    const color_primary = "color-primary";
    const bg_color_secondary = "background-color-secondary";
    const imgContactUs = "img/pages/ContactUs/contact.png";

    const not_empty_msg = "Not empty allowed.";
    const inputs = [
        {
            type: "text",
            label: "Name:",
            errorMsg: not_empty_msg,
        },
        {
            type: "email",
            label: "Email:",
            errorMsg: "Invalid email"
        },
        {
            type: "tel",
            label: "Phone:",
            errorMsg: "Invalid phone"
        },
        {
            type: "textarea",
            label: "How can we help you?:",
            errorMsg: not_empty_msg
        }
    ];


    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputMsg, setInputMsg] = useState('');
    const [inputPhone, setInputPhone] = useState('');
    const [current_, setCurrent] = useState(0);

    const [errorName, setErrorName] = useState(inputs[0].errorMsg);
    const [errorEmail, setErrorEmail] = useState(inputs[1].errorMsg);
    const [errorPhone, setErrorPhone] = useState(inputs[2].errorMsg);
    const [errorMsg, setErrorMsg] = useState('');

    const [isValidName, setValidName] = useState(true);
    const [isValidEmail, setValidEmail] = useState(true);
    const [isValidPhone, setValidPhone] = useState(true);
    const [isValidMsg, setValidMsg] = useState(true);

    const maxLength_textArea = 500;

    
    const btnEnviarClicked = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        setValidName(validName());
        setValidEmail(validEmail());
        setValidPhone(validPhone());
        setValidMsg(validMsg());

        if (validName() && validEmail() && validPhone() && validMsg()) {
            console.log("Nombre: ", inputName);
            console.log("Email: ", inputEmail);
            console.log("Telefono: ", inputPhone);
            console.log("Mensaje: ", inputMsg);
        }
    };

    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        console.log(event);
        switch (name.toLowerCase()) {
            case 'name':
                setInputName(value);
                break;
            case 'email':
                setInputEmail(value);
                break;
            case 'phone':
                setInputPhone(formatPhoneNumber(value));
                break;
            case 'msg':
                if (value.length <= maxLength_textArea) {
                    setCurrent(value.length);
                    setInputMsg(value);
                }
                break;
            default:
                break;
        }
    }

    function handleFocus(event: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement>) {
        const { name } = event.target;
        console.log(event);
        switch (name.toLowerCase()) {
            case 'name':
                setValidName(true);
                break;
            case 'email':
                setValidEmail(true);
                break;
            case 'phone':
                setValidPhone(true);
                break;
            case 'msg':
                setValidMsg(true);
               break;
            
            default:
                break;
        }
    }


    function validEmail() {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!inputEmail) {
            setErrorEmail(not_empty_msg);
            return false;
        }
        if (regex.test(inputEmail) === false) {
            setErrorEmail(inputs[1].errorMsg);
            return false;
        } else {
            return true;
        }
    }

    function validPhone() {
        const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
        if (!inputPhone) {
            setErrorPhone(not_empty_msg);
            return false;
        } else if (!phonePattern.test(inputPhone)) {
            setErrorPhone(inputs[2].errorMsg);
            return false;
        } else {
            return true;
        }
    }

    function validName() {
        if (!inputName || inputName.length! > 0) {
            setErrorName(not_empty_msg);
            return false;
        } else {
            return true;
        }
    }

    function validMsg() {
        if (!inputMsg || inputMsg.length < 1) {
            console.log(inputMsg.length);
            setErrorMsg(not_empty_msg);
            return false;
        } else {
            return true;
        }
    }


    return (
        <div id="contactUs" className="flex flex-column">
            <SectionTitle title={title_} colorTitle={color_primary} colorSeparator={bg_color_secondary} />
            <div className="sec2 content margin-bottom">
                <div className='card grid'>
                <div className="left">
                    <img src={imgContactUs} alt="Contact Us" />
                </div>
                <div className='right flex flex-column'>
                    <div className='inputs flex flex-column'>
                        <Input type={inputs[0].type} label={inputs[0].label} colorLabel='color-primary' borderColor='color-primary' errorLabel={errorName} error={!isValidName} onChange={handleChange} name={"name"} onFocus={handleFocus}/>
                        <Input type={inputs[1].type} label={inputs[1].label} colorLabel='color-primary' borderColor='color-primary' errorLabel={errorEmail} error={!isValidEmail} onChange={handleChange} name={"email"} onFocus={handleFocus}/>
                        <Input type={inputs[2].type} label={inputs[2].label} colorLabel='color-primary' borderColor='color-primary' errorLabel={errorPhone} error={!isValidPhone} onChange={handleChange} name={"phone"} value={inputPhone} onFocus={handleFocus}/>
                        <Input type={inputs[3].type} label={inputs[3].label} colorLabel='color-primary' borderColor='color-primary' errorLabel={errorMsg} error={!isValidMsg} onChange={handleChange} name={"msg"} maxLength={maxLength_textArea} onFocus={handleFocus} current={current_}/>
                    </div>
                    <button className='button_container color-white background-color-primary' onClick={btnEnviarClicked}>Click me</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
