import axios from 'axios';
import { useState } from 'react'
export default function Contact_me({ contactRef }) {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const [succMessage, setSuccMessage] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email,
            subject,
            message,
        };
        const res = await axios.post('https://mohammed-portfolio0.vercel.app/api/email', data);
        if (!res.data.done) {
            setErrMessage(res.data.err);
            setSuccMessage('');
        }
        else {
            setSuccMessage('Email Sentet Succesfly!');
            setErrMessage('')
        }
    }
    return (
        <div className="w-[85%] sm:h-[86vh] md:h-[60vh] mx-auto sm:mt-20 md:mt-10 lg:mt-0" ref={contactRef}>
            <h1 className="text-4xl text-text_primary font-bold mx-auto text-center">Intrested? Contact me 📩</h1>
            <form onSubmit={handleSubmit} className="contact_form">
                {
                    errMessage &&
                    <h3 className="text-2xl font-bold text-red-500">
                        {errMessage}
                    </h3>
                }
                {
                    succMessage &&
                    <h3 className="text-2xl font-bold text-blue-500">
                        {succMessage}
                    </h3>
                }
                <label>
                    <p>Your Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)} />
                </label>
                <label>
                    <p>Subject</p>
                    <input type="text" onChange={e => setSubject(e.target.value)} />
                </label>
                <label>
                    <p>Message</p>
                    <textarea type="text" onChange={e => setMessage(e.target.value)} className="sm:w-[90%] md:w-[400px]"></textarea>
                </label>
                <br />
                <button type="submit" className="sm:mt-5 md:mt-0 bg-blue-600 hover:bg-blue-700 w-[110px] rounded h-[35px] text-text_primary">Send</button>
            </form>
        </div>
    );
}
