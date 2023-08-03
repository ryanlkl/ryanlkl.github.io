import './Contact.css';
import emailjs from '@emailjs/browser'
import React, { useState, useRef } from 'react';

export default function Contact() {

    const form = useRef();
    const [inputFirstName, setinputFirstName] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_c96oplc','template_005d3th', form.current, 'kQ2hVjOwr5sWtkwqJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
    }
    return (
        <div className='contact-form'>
            <form ref={form} onSubmit={sendEmail} className="questions">
                <fieldset className="fs">
                    <legend class='legend'>Queries/Requests</legend>

                    <div className="firstname">
                        <input placeholder=' Your Name...' className='inputText' type="text" name="name" />
                    </div>

                    <div className="email">
                        <input placeholder=' Email...' className='inputText' type="email" id="email" name="email"/>
                    </div>

                    <div className="summary">
                        <textarea placeholder=' What is your query/request?'id="summary" name="summary" rows="15"></textarea>
                    </div>

                    <div className="submit">
                        <button id="submit" type='submit' value='Send'>Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
}
