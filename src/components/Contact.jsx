import React, { useState } from 'react';
import emailCapture from '../img/email-capture.svg';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isSended, setIsSended] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs.sendForm('gmailMessage', 'template_owhswnk', e.target, 'user_uuPBGrLHvhx45HuAtCYhS')
      .then((result) => {
          console.log(result.text);
          setIsLoading(false);
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
    <div className="relative md:duration-300 bg-gray-50 dark:bg-black dark:bg-opacity-10 px-10 mx-auto antialiased w-full h-full flex justify-center pb-7" id="contato">
      <div className="container py-24 mx-auto max-w-7x1 flex flex-col items-center justify-center">
        <div className="flex flex-wrap w-full mb-4 p-4">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900 dark:text-gray-200">Contato</h1>
            <div className="h-1 w-28 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:w-full items-center h-full w-full justify-center sm:text-sm md:text-xl lg:text-xl mt-2">
          <div className="mb-3 md:mr-5 sm:w-28 md:w-80">
            <img className="w-64" src={emailCapture} alt="" loading="lazy" />
          </div>
          <div className="bg-white dark:bg-gray-700 dark:text-gray-200 md:w-1/2 lg:w-2/3 w-full shadow rounded p-8 sm:p-12 mt-10">
            <p className="text-3xl font-bold leading-7 text-center mb-5 dark:text-gray-200">Entre em contato</p>
            <div className="flex justify-center">
              <a className="mx-3" href="https://www.linkedin.com/in/thomasravache/" target="_blank" rel="noopener noreferrer">
                <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="" />
              </a>
              <a className="mx-3" href="https://github.com/thomasravache" target="_blank" rel="noopener noreferrer">
                <img className="w-12" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />
              </a>
            </div>
            <form onSubmit={ sendEmail }>
              <div className="md:flex items-center mt-12">
                <div className="w-full flex flex-col">
                    <label className="font-semibold leading-none">E-mail</label>
                    <input placeholder="exemplo@email.com" type="email" required className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-100 border rounded border-gray-200" name="email" />
                </div>
              </div>
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
                  loading && <span className="text-gray-900 dark:text-gray-200"><strong>Enviando...</strong></span>
                }
                {
                  isSended && <span className="text-green-500"><strong>Sucesso! Obrigado!</strong></span>
                }
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
