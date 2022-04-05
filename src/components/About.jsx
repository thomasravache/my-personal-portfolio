import React from 'react';
import aboutInfo from '../data/aboutInfo';
import aboutImage from '../img/about.svg';

const About = () => {
  const { personalInfo } = aboutInfo;
  return (
    <div className="relative md:duration-300 bg-gray-100 dark:bg-black dark:bg-opacity-50 px-4 mx-auto antialiased w-full h-full md:h-screen flex justify-center pb-7" id="sobre-mim">
      <div className="container px-5 py-24 mx-auto max-w-7x1 flex flex-col items-center justify-center">
        <div className="flex flex-wrap w-full mb-4 p-4">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900 dark:text-gray-200">Sobre mim</h1>
            <div className="h-1 w-28 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:w-full items-center h-auto w-auto justify-center sm:text-sm md:text-xl lg:text-xl">
          <div className="mb-3 md:mr-5 sm:w-28 md:w-80">
            <img className="w-64" src={aboutImage} alt="" loading="lazy" />
          </div>
          <div className="sm:w-4/5 md:w-1/2 lg:w-2/3 sm:leading-4 md:leading-7 bg-white dark:bg-gray-700 dark:text-gray-200 rounded-lg p-5">
            {
              personalInfo.map((info, index) => (
                <p key={index} className="mb-9">
                  {info}
                </p>
              ))
            }
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
