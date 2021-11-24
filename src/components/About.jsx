import React from 'react';
import aboutInfo from '../data/aboutInfo';
import aboutImage from '../img/about.svg';

const About = () => {
  const { personalInfo } = aboutInfo;
  return (
    <div className="relative container bg-yellow-100 px-4 mx-auto antialiased h-screen flex justify-center pb-5">
      <div className="flex flex-col md:flex-row items-center h-screen justify-center md:text-xl">
        <div className="mb-3 md:mr-5">
          <img className="w-64" src={aboutImage} alt="" />
        </div>
        <div className="bg-white rounded-lg p-5">
          {
            personalInfo.map((info) => (
              <p className="mb-3">
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
