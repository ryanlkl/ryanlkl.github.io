import './Contact.css';
import emailjs from '@emailjs/browser'
import React, { useState, useRef } from 'react';

export default function Contact() {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const form = useRef();
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputText, setInputText] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c96oplc','template_005d3th', form.current, 'kQ2hVjOwr5sWtkwqJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
    }

    const handleNameChange = (event) => {
        setInputName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setInputEmail(event.target.value);
    }

    const handleTextChange = (event) => {
        setInputText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (inputName.trim() === "" || inputEmail.trim() === "" || inputText.trim() === "") {
            console.log("Empty input");
            setIsEmpty(true);
        } else {
            setIsEmpty(false)
            sendEmail(event)
            setInputName('')
            setInputEmail('')
            setInputText('')
            setIsSubmitted(true);
        }
    }

    return (
        <div className='contact-form'>
            <form ref={form} onSubmit={handleSubmit} className="questions">
                <fieldset className="fs">
                    <legend class='legend'>Queries/Requests</legend>

                    <div className="firstname">
                        <input onChange={handleNameChange} value={inputName} placeholder=' Your Name...' className='inputText' type="text" name="name" />
                    </div>

                    <div className="email">
                        <input onChange={handleEmailChange} value={inputEmail} placeholder=' Email...' className='inputText' type="email" id="email" name="email"/>
                    </div>

                    <div className="summary">
                        <textarea onChange={handleTextChange} value={inputText} placeholder=' What is your query/request?' id="summary" name="summary" rows="15"></textarea>
                    </div>

                    <div className="submit">
                        <button id="submit" type='submit'>Submit</button>
                    </div>

                    { isSubmitted && (<div className="submitted">*Form submitted successfully</div>) }
                    { isEmpty && (<div className="submitted">Please complete all the sections</div>)}
                </fieldset>
            </form>
        </div>
    )
}
