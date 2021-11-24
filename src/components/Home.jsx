import React from 'react';
import myPhoto from '../img/foto-perfil-thomas.jpg';
import homeInfo from '../data/homeInfo';
// import Wave from './Wave';

const Home = () => {
  const { title, tags } = homeInfo;
  return (
    <div className="relative container bg-green-100 px-4 mx-auto antialiased h-screen flex flex-col justify-center">
      <div className="flex flex-col-reverse md:flex-row p-5 items-center justify-center">
        <div className="mt-3 text-center">
          <h1 className="text-xl mb-10">{ title }</h1>
          <div className="flex flex-wrap">
            {
              tags.map((tag) => (
                <span className="rounded-full py-1 px-2 m-1 bg-indigo-500 text-gray-200">
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
          />
        </div>
      </div>
      {/* <Wave className="absolute bottom-0 left-0 sm:-bottom-20 text-yellow-100 dark:text-darkgrey fill-current" /> */}
    </div>
  )
};

export default Home;
