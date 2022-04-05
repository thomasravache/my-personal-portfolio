import React from 'react';
import skillsInfo from '../data/skillsInfo';

const Skills = () => {
  const { hardSkills } = skillsInfo;
  return (
    <div className="relative bg-gray-50 px-4 mx-auto antialiased w-full h-full flex justify-center pb-5" id="skills">
      <div className="container px-5 py-24 mx-auto max-w-7x1 flex flex-col items-center">
        <div class="flex flex-wrap w-full mb-4 p-4">
            <div class="w-full mb-6 lg:mb-0">
              <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Hard Skills</h1>
              <div class="h-1 w-28 bg-indigo-500 rounded"></div>
            </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center py-5">
          <div className="flex flex-wrap justify-center">
            {
              hardSkills.map(({ name, srcIcon }) => (
                <div
                  key={ name }
                  className="lg:h-56 lg:w-44 h-44 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl m-4"
                >
                  <img className="h-14 lg:h-20" src={ srcIcon } alt={name} loading="lazy"/>
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
