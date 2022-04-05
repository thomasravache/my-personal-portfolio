import React from 'react';
import myPhoto from '../img/foto-perfil-thomas.jpg';
import homeInfo from '../data/homeInfo';
// import Wave from './Wave';

const Home = () => {
  const { title, tags } = homeInfo;
  return (
    <div className="relative bg-gray-50 px-4 mx-auto antialiased w-full h-screen flex flex-col justify-center" id="home">
      {/* <div className="flex flex-col-reverse md:flex-row p-5 items-center justify-center">
        <div className="mt-3 text-center">
          <h1 className="text-xl mb-10">{ title }</h1>
          <div className="flex flex-wrap">
            {
              tags.map((tag) => (
                <span key={ tag }className="rounded-full py-1 px-2 m-1 bg-indigo-500 text-gray-200">
                  { tag }
                </span>
              ))
            }
          </div>
        </div>
        <div className="-mt-5">
          <img
            src={myPhoto}
            alt="foto de Thomas Ravache"
            className="w-64 h-64 rounded-full"
            loading="lazy"
          />
        </div>
      </div> */}
      {/* <Wave className="absolute bottom-0 left-0 sm:-bottom-20 text-yellow-100 dark:text-darkgrey fill-current" /> */}
      <div class="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
        <div class="grid justify-center items-center order-1 col-span-1">
          <img class="lg:h-80 md:h-64 h-40 rounded-full" src={myPhoto} alt="" />
        </div>
        <div class="mt-8 md:mt-0 lg:justify-end col-span-2">
          <h1 class="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">Olá, eu sou o Thomas, e sou Desenvolvedor Full Stack</h1>
          <p class="text-xl text-gray-800 text-center md:text-left">Apaixonado por tecnologia, e sempre em busca de novos aprendizados.</p>
          <button onClick={(e) => {
            e.preventDefault();
            window.open('https://drive.google.com/file/d/1G06CWNtJZ_GZIU-CLmpcOuL0meiLx36O/view?usp=sharing', '_blank')
          }} target="_blank" rel="noreferrer" class="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-indigo-500">Download CV</button>
        </div>
      </div>
    </div>
  )
};

export default Home;
