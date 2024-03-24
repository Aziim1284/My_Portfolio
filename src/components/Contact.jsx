import React, { useEffect, useState } from 'react';
import { IoSendSharp } from 'react-icons/io5';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAlert } from 'react-alert'
import { Envs } from '../ENVS/Envs';
import { FORM_SUBMISSION_MESSAGE ,CONTACT ,SEND_BUTTON ,ALERT_MESSAGE_ON_SUBMISSION} from '../appConstant';
console.log(process.env.REACT_APP_SERVICE_KEY)

const Contact = () => {
  const alert = useAlert()
  const [message, setMessage] = useState({
    name: "",
    email: "",
    yourMessage: ""
  });

  useEffect(() => {
    AOS.init();
  }, []);

  const changeHandler = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(Envs.serviceKey, Envs.templateKey, e.target, Envs.publicKey)
      .then((result) => {
        alert.show("Message sent successFully")
        setMessage({
          name: '',
          email: '',
          yourMessage: ''
        });
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-l from-[#21073C] to-[#3A1078] text-gray-300 py-32"
    >
      <div className="flex flex-col justify-center items-center w-full h-full text-white">
        {/* Heading */}
        <p className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">{CONTACT}</p>
        {/* Description */}
        <p className="py-6">{FORM_SUBMISSION_MESSAGE}</p>
        {/* Form */}
        <div className="">
          <form onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={message.name}
              onChange={changeHandler}
              className="bg-gray-100 text-gray-950 p-2 w-full rounded-md active:border-[#00FFCA] active:border-2"
              data-aos="fade-down" data-aos-duration="600" data-aos-easing="linear"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={message.email}
              onChange={changeHandler}
              className="my-4 p-2 bg-gray-100 text-gray-950 w-full rounded-md active:border-[#00FFCA] active:border-2"
              data-aos="fade-down" data-aos-duration="800" data-aos-easing="linear"
            />
            <textarea
              name="yourMessage"
              onChange={changeHandler}
              value={message.yourMessage}
              className="bg-gray-100 p-2 w-full text-gray-950 rounded-md active:border-[#00FFCA] active:border-2"
              data-aos="fade-down" data-aos-duration="1000" data-aos-easing="linear"
              placeholder="Message"
              rows="10"
            ></textarea>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
             <span className='flex flex-inline items-center '>{SEND_BUTTON} <IoSendSharp className='pl-3 h-8 w-8'/></span> 
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
