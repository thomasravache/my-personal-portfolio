import React from 'react';
import projectsInfo from '../data/projectsInfo';

const Projects = () => {
  return (
    <div className="relative md:duration-300 bg-gray-100 dark:bg-black dark:bg-opacity-50 px-4 antialiased w-full h-full flex justify-center pb-5" id="projetos">
      <div className="container px-5 py-24 mx-auto max-w-7x1 flex flex-col items-center justify-center">
        <div className="flex flex-wrap w-full mb-4 p-4">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900 dark:text-gray-200">Projetos</h1>
            <div className="h-1 w-28 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            projectsInfo.map(({ title, description, projectLink, tags, srcImage }) => (
              <div className="xl:w-1/3 md:w-1/2 p-4 flex" key={ title }>
                <div className="bg-white flex flex-col justify-between dark:bg-gray-700 dark:text-gray-200 p-6 rounded-lg">
                  <div>
                    <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6 justify-self-start" src={srcImage} alt="Size 720x400" loading="lazy"/>
                    <h2 className="text-lg text-gray-900 dark:text-gray-100 font-medium title-font mb-4 justify-self-start">{ title }</h2>
                  </div>
                  <p className="leading-relaxed text-base">{ description }</p>
                  <div className="mt-2 flex flex-wrap justify-self-start">
                    {
                      tags.map((tag) => (
                        <span className="m-1" key={ tag }>
                          <span
                            className="pill bg-gray-400 rounded-full px-4 text-xs py-1"
                          >
                            { `#${tag}` }
                          </span>
                        </span>
                      ))
                    }
                  </div>
                  <div className="mt-3 justify-self-end">
                    <a href={projectLink} target="_blank" rel="noreferrer" className="block text-center p-2 pl-5 pr-5 bg-indigo-500 hover:bg-indigo-600 md:duration-300 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300">Acessar</a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Projects;
