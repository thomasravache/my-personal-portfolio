import React from 'react';
import projectsInfo from '../data/projectsInfo';

const Projects = () => {
  return (
    <div className="relative bg-red-100 px-4 antialiased w-full h-full flex justify-center pb-5" id="projetos">
      <div className="container px-5 py-24 mx-auto max-w-7x1 flex flex-col items-center justify-center">
        <div class="flex flex-wrap w-full mb-4 p-4">
          <div class="w-full mb-6 lg:mb-0">
            <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Projetos</h1>
            <div class="h-1 w-28 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {
            projectsInfo.map(({ title, description, projectLink, tags }) => (
              <div class="xl:w-1/3 md:w-1/2 p-4" key={ title }>
                <div class="bg-white p-6 rounded-lg">
                  <img class="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72 rounded w-full object-cover object-center mb-6" src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg" alt="Size 720x400" loading="lazy"/>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">{ title }</h2>
                  <p class="leading-relaxed text-base">{ description }</p>
                  <div className="">
                    {
                      tags.map((tag) => (
                        <span key={ tag }>
                          <span
                            class="pill bg-gray-400 rounded-full px-4 text-xs mr-2 py-1"
                          >
                            { `#${tag}` }
                          </span>
                        </span>
                      ))
                    }
                  </div>
                  <div className="mt-3">
                    <a href={projectLink} target="_blank" rel="noreferrer" className="block text-center p-2 pl-5 pr-5 bg-green-500 hover:bg-green-400 duration-300 text-gray-100 text-lg rounded-lg focus:border-4 border-green-300">Acessar</a>
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
