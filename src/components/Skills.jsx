import React from 'react';
import skillsInfo from '../data/skillsInfo';

const Skills = () => {
  const { hardSkills, softSkills } = skillsInfo;
  return (
    <div className="relative bg-blue-100 px-4 mx-auto antialiased w-full h-full flex justify-center pb-5" id="skills">
      <div className="container px-5 py-24 mx-auto max-w-7x1 flex flex-col items-center">
        <div class="flex flex-wrap w-full mb-4 p-4">
            <div class="w-full mb-6 lg:mb-0">
              <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Hard Skills</h1>
              <div class="h-1 w-28 bg-indigo-500 rounded"></div>
            </div>
        </div>
        <div className="flex flex-wrap justify-center -m-4">
          {
            hardSkills.map(({ name, srcIcon }) => (
              <div class="xl:w-1/3 md:w-1/2 w-5/12 h-auto p-1" key={ name }>
                <div class="bg-white p-6 rounded-lg h-72 w-full flex flex-col items-center">
                  <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-center object-contain mb-6" src={srcIcon} alt={name} loading="lazy"/>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{ name }</h2>
                </div>
              </div>
            ))
          }
        </div>

        {/* <div className="flex flex-wrap -m-4">
          {
            hardSkills.map(({ name, srcIcon }) => (
              <div
                key={ name }
                className="xl:w-1/3 md:w-1/2 p-4 h-44 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl m-4"
              >
                <img className="h-14" src={ srcIcon } alt={name} loading="lazy"/>
                <span className="mt-6 text-sm ?leading-5 font-semibold text-center" >{ name }</span>
              </div>
            ))
          }
        </div> */}
        <div className="flex flex-col justify-center items-center text-center py-5">
          <div class="flex flex-wrap w-full mb-4 p-4">
              <div class="w-full mb-6 lg:mb-0">
                <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Soft Skills</h1>
                {/* <div class="h-1 w-20 bg-indigo-500 rounded"></div> */}
              </div>
            </div>
          <div className="flex flex-wrap">
            {
              softSkills.map(({ name, srcIcon }) => (
                <div
                  key={ name }
                  className="h-44 w-32 bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:bg-white hover:shadow-xl m-4"
                >
                  <img className="h-14" src={ srcIcon } alt={name} loading="lazy"/>
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
