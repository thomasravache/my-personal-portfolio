import React from 'react';
import skillsInfo from '../data/skillsInfo';

const Skills = () => {
  const { hardSkills, softSkills } = skillsInfo;
  return (
    <div className="relative container bg-blue-100 px-4 mx-auto antialiased h-full flex justify-center pb-5">
      <div className="flex flex-col">
        <div className="flex flex-col justify-center items-center text-center py-5">
          <h1 className="mb-5">Hard Skills</h1>
          <div className="flex flex-wrap justify-around items-center">
            {
              hardSkills.map(({ name, srcIcon }) => (
                <div
                  key={ name }
                  className="h-44 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl mb-2"
                >
                  <img className="h-14" src={ srcIcon } alt={name} />
                  <span className="mt-6 text-sm ?leading-5 font-semibold text-center" >{ name }</span>
                </div>
              ))
            }
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center py-5">
          <h1 className="mb-5">Soft Skills</h1>
          <div className="flex flex-wrap justify-around items-center">
            {
              softSkills.map(({ name, srcIcon }) => (
                <div
                  key={ name }
                  className="h-44 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl mb-2"
                >
                  <img className="h-14" src={ srcIcon } alt={name} />
                  <span className="mt-6 text-sm ?leading-5 font-semibold text-center" >{ name }</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
