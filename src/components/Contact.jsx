import React, { useState } from 'react';
import emailCapture from '../img/email-capture.svg';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isSended, setIsSended] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmailMessage', 'template_owhswnk', e.target, 'user_uuPBGrLHvhx45HuAtCYhS')
      .then((result) => {
          console.log(result.text);
          setIsSended(true);
          const myTimeOut = setTimeout(() => {
            setIsSended(false);
            clearTimeout(myTimeOut);
          }, 3000);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset(); // limpar quando enviar
  };

  return(
    <div className="relative bg-gray-50 px-4 antialiased w-full h-full flex justify-center pb-5 pt-5" id="contato">
      <div className="max-w-5xl mx-auto px-3 w-screen md:px-6 lg:px-8 mb-12 flex flex-col">
        <div>
          <img src={emailCapture} alt="" loading="lazy" />
        </div>
        <div className="bg-white w-full shadow rounded p-8 sm:p-12 mt-10">
          <p className="text-3xl font-bold leading-7 text-center">Entre em contato</p>
          <form onSubmit={ sendEmail }>
            <div className="md:flex items-center mt-12">
              <div className="w-full flex flex-col">
                  <label className="font-semibold leading-none">E-mail</label>
                  <input placeholder="exemplo@email.com" type="email" required className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" name="email" />
              </div>
              {/* <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="font-semibold leading-none">Phone</label>
                  <input type="email" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200"/>
              </div> */}
            </div>
            {/* <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                  <label className="font-semibold leading-none">Subject</label>
                  <input type="text" className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" name="subject"/>
              </div>
            </div> */}
            <div>
              <div className="w-full flex flex-col mt-8">
                  <label className="font-semibold leading-none">Mensagem</label>
                  <textarea placeholder="Digite sua mensagem aqui..." type="text" className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" name="message" required></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <button className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-indigo-500 rounded hover:bg-indigo-400 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                  Enviar mensagem
              </button>
            </div>
            <div className="flex items-center justify-center mt-4">
              {
                isSended && <span className="text-green-500">Sucesso! Obrigado!</span>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
