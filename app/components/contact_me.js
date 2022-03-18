import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, } from '@fortawesome/free-solid-svg-icons';
export default function Contact_me({ contactRef }) {
    return (
        <div data-aos="zoom-in-up" className="w-[85%] sm:h-[27vh] md:h-[30vh] mx-auto sm:mt-20 md:mt-10 lg:mt-0 rtl" ref={contactRef}>
            <h1 className="text-4xl text-text_primary font-bold mx-auto text-center">مهتم بطلب موقع؟ <a href="https://www.instagram.com/1kdd1/" className="text-blue-500 hover:underline">Contact me</a> 📩</h1>
        </div>
    );
}
