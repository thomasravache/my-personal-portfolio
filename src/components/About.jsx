import React from 'react';
import aboutInfo from '../data/aboutInfo';
import aboutImage from '../img/about.svg';

const About = () => {
  const { personalInfo } = aboutInfo;
  return (
    <div className="relative bg-gray-100 px-4 mx-auto antialiased w-full h-full flex justify-center pb-7" id="sobre-mim">
      <div className="flex flex-col md:flex-row md:w-full items-center h-screen w-screen justify-center sm:text-sm md:text-xl lg:text-xl">
        <div className="mb-3 md:mr-5 sm:w-28 md:w-80">
          <img className="w-64" src={aboutImage} alt="" loading="lazy" />
        </div>
        <div className="sm:w-4/5 md:w-1/2 lg:w-2/3 sm:leading-4 md:leading-7 bg-white rounded-lg p-5">
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
  );
}

export default About;
