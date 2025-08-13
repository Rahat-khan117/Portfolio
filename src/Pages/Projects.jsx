import { useState } from "react";

const Projects = ({ projects }) => {
  console.log(projects);
  const [mProject, setMProject] = useState();
  const [modal, setModal] = useState(false);

  const handleModal = (id) => {
    const filterP = projects.find((project) => project.id === id);
    setMProject(filterP);
  };

  return (
    <div>
      <p className="text-4xl text-center font-bold">My Projects</p>
      <div className="mt-10 grid md:grid-cols-3 gap-9 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`bg-gray-800 text-white p-3 rounded-2xl shadow-3xl group`}
          >
            <img className="rounded-2xl" src={project.image} />
            <p className={` mt-1.5 ml-1 text-[#b30af5] group-hover:text-white`}>
              website
            </p>
            <p className="text-xl font-bold mt-1 ml-1">{project.name}</p>
            <p className="text-gray-300 mt-1.5 ml-">{project.s_d}</p>
            <p
              onClick={() => {
                setModal(true);
                handleModal(project.id);
              }}
              className="underline hover:text-[#b30af5] cursor-pointer mt-2 mb-2"
            >
              View More
              <span>
                <i className="fa-solid fa-arrow-right ml-2 text-[#b30af5]"></i>
              </span>
            </p>
          </div>
        ))}
      </div>

      {modal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 ">
          <div className="bg-white rounded-lg shadow-lg p-4 pb-7 md:w-[56vw] sm:w-[76vw] w-[90vw] relative z-30">
            <i
              onClick={() => setModal(false)}
              className="fa-solid fa-xmark absolute right-2 top-2 text-gray-700 text-xl bg-gray-100 cursor-pointer "
            ></i>

            <div className="text-black space-y-2.5">
              <p className="text-3xl font-bold text-[#b30af5]">
                {mProject.name}
              </p>
              <p className="font-serif font-bold">About This Project</p>
              <p>{mProject.desc}</p>

              <a target="blank" href={mProject.liveUrl}>
                <p className="font-bold text-xl cursor-pointer hover:text-2xl max-w-fit">
                Live Project
                <span>
                  <i className="fa-solid fa-arrow-right ml-2 text-[#b30af5]"></i>
                </span>
              </p>
              </a>
              <a target="blank" href={mProject.github}>
                <p className="font-bold text-xl cursor-pointer hover:text-2xl mt-2 max-w-fit">
                Github Repository Link
                <span>
                  <i className="fa-solid fa-arrow-right ml-2 text-[#b30af5]"></i>
                </span>
              </p>
              </a>

              <p className="font-serif font-bold mt-4"> Challenges faced on doing this project </p>
              <p className="-m-1">{mProject.challenges}</p>

              <p className="font-serif font-bold mt-4"> future plans for the project </p>
              <p className="-m-1">{mProject.future}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
