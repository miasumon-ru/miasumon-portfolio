import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Navbar from '../Home/Navbar';
import Title from '../../components/Title';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_377syjn', 'template_fkoum5x', form.current, {
                publicKey: 'BCiGVm288ERlqKiKu',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
              
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div className='min-h-screen text-white roboto'>

            <Navbar></Navbar>

            <Title title={'Contact'}></Title>

            <div className=' max-w-2xl mx-auto p-10 rounded-lg bg-[#090c56]'>
                <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input className='text-black p-2 rounded-md my-2' type="text" name="user_name" />
                    <label>Email</label>
                    <input className='text-black p-2 rounded-md my-2' type="email" name="user_email" />
                    <label>Message</label>
                    <textarea className='text-black p-2 rounded-md my-2' name="message" />
                    <input className='border text-white mt-4 btn p-2 bg-orange-400 hover:bg-orange-500' type="submit" value="Send" />
                </form>
            </div>

        </div>
    );
};

export default Contact;