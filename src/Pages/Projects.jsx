import React from 'react';

const Projects = ({projects}) => {
    console.log(projects);
    return (
        <div>
            <p className='text-4xl text-center font-bold'>My Projects</p>
            <div className='mt-10 grid md:grid-cols-3 gap-9 sm:grid-cols-2'>
                {
                    projects.map(project => 
                        <div key={project.id} className={`bg-gray-800 text-white p-3 rounded-2xl shadow-3xl`}>
                            <img className='rounded-2xl' src={project.image}/>
                            <p className='text-xl font-bold mt-3 ml-2'>{project.name}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;