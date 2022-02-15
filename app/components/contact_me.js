import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, } from '@fortawesome/free-solid-svg-icons';
export default function Contact_me({ contactRef }) {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errMessage, setErrMessage] = useState('');
    const [succMessage, setSuccMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const arr = []
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)
        const data = {
            email,
            subject,
            message,
        };
        const res = await axios.post('/api/email', data);
        if (!res.data.done) {
            setErrMessage(res.data.err);
            setSuccMessage('');
        }
        else {
            setSuccMessage('Email Sentet Succesfly!');
            setErrMessage('')
        }
        setIsLoading(false);
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
                <button type="submit" disabled={isLoading}
                    className={`
                    h-[35px] 
                    w-[110px] 
                    bg-blue-600
                    opacity-${!isLoading ? '100' : '80'}
                    hover:bg-blue-800 
                    text-text_primary 
                    rounded 
                    sm:mt-5 
                    md:mt-0 
                `}>
                    {
                        !isLoading
                            ?
                            'Send'
                            :
                            <span className="z-0">
                                <FontAwesomeIcon icon={faSpinner} className="w-[25px] mx-auto btn-loader" />
                            </span>
                    }
                </button>
            </form>
        </div>
    );
}
