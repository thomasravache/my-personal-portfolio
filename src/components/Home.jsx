import React from 'react';
import myPhoto from '../img/foto-perfil-thomas.jpg';
import homeInfo from '../data/homeInfo';
// import Wave from './Wave';

const Home = () => {
  const { title, subtitle } = homeInfo;
  return (
    <div className="relative md:duration-300 pb-10 bg-gray-50 dark:bg-black dark:bg-opacity-10 px-4 mx-auto antialiased w-full h-screen flex flex-col justify-center" id="home">
      <div className="container mx-auto mt-0 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
        <div className="grid justify-center items-center order-1 col-span-1">
          <img className="lg:h-80 md:h-64 h-40 rounded-full" src={myPhoto} alt="" />
        </div>
        <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
          <h1 className="text-4xl text-gray-800 dark:text-gray-200 text-center md:text-left font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-800 dark:text-gray-200 text-center md:text-left">{subtitle}</p>
          <button onClick={(e) => {
            e.preventDefault();
            window.open('https://drive.google.com/file/d/1G06CWNtJZ_GZIU-CLmpcOuL0meiLx36O/view?usp=sharing', '_blank')
          }} target="_blank" rel="noreferrer" className="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-indigo-500">Download CV</button>
        </div>
      </div>
    </div>
  )
};

export default Home;
