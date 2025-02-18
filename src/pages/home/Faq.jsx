import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import newsphoto from '../../assets/Newsletter-bro.png'
import SectionTitle from '../../shared/SectionTitle';
import Swal from 'sweetalert2';

const Faq = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(import.meta.env.VITE_serviceId, import.meta.env.VITE_templateId, form.current, {
                publicKey: import.meta.env.VITE_publicKey,
            })
            .then(
                () => {
                    //   console.log('SUCCESS!');
                    Swal.fire({
                        title: 'We will catch you soon',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    });
                    form.current.reset();
                },
                (error) => {
                      console.log('FAILED...', error.text);
                },
            );
    };


    return (
        <div className='my-10 lg:my-24'>
            <SectionTitle heading='Newsletter' subHeading='connect with us'></SectionTitle>
            <div className='mt-4 lg:mt-8 grid grid-cols-1 lg:grid-cols-2 gap-4'>

                {/* image */}
                <div className='h-[250px] lg:h-[450px]'>
                    <img className='h-full w-full' src={newsphoto} alt="" />
                </div>

                {/* newsletter */}
                <div className="flex justify-center w-full">
                    <form ref={form} onSubmit={sendEmail} className="bg-white dark:bg-purple-200 p-8 rounded-lg shadow-lg  w-full space-y-6 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
                        <h3 className="text-2xl font-semibold text-blue-500 mb-4">Send us a Message</h3>
                        <div>
                            <label htmlFor="text" className="block text-sm font-medium text-gray-600">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name='from_name'

                                required
                                className="mt-2 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name='from_email'

                                required
                                className="mt-2 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-600">Message</label>
                            <textarea
                                id="message"
                                name='message'
                                required
                                rows="4"
                                className="mt-2 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full btn text-blue-500 border-2 bg-transparent border-blue-500 font-bold hover:bg-blue-500 hover:text-white hover:border-none"
                        >
                            Send Message
                        </button>


                    </form>
                </div>

            </div>
        </div>
    );
};

export default Faq;