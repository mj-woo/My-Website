import './portfolio1.css'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import data from './data'
import {useState} from 'react'
import Modal from './Modal'
import Navbar from '../navbar/Navbar'

export const Portfolio = () => {
  const [projects, setProjects] = useState(data); 

  const categories = data.flatMap(item => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  const filterProjectsHandler = (category) => {
    if(category === "all"){
      setProjects(data);
      return;
    }
    const filterProjects = data.filter(project => project.category.includes(category)); // returns a new array of projects
    setProjects(filterProjects);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => {
      setIsModalOpen(false);
      setSelectedProject(null);
      document.body.style.overflow = 'auto';
  };

  const openModal = (project) => {
      setIsModalOpen(true);
      setSelectedProject(project)
      console.log(window.innerWidth)
      document.body.style.overflow = 'hidden';
  };

  return (
    <section id="portfolionav" className='portfolio__container_head' style={{background: 'white'}}>
      <Navbar closeModal={closeModal} />
      <h2 className='port'>
        My Work
      </h2>
      <div className='container portfolio__container_nav'>
        <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler} />
        <Projects projects={projects} closeModal={closeModal} openModal={openModal} isModalOpen={isModalOpen}/>
        {isModalOpen && (
          <>
            <div className="full-page-overlay"></div>
            <Modal project={selectedProject} closeModal={closeModal} openModal={openModal} isModalOpen={isModalOpen}/>
          </>
        )}
      </div>
      {/* {isModalOpen && (
        <>
          <div className="full-page-overlay"></div>
          <Modal project={selectedProject} closeModal={closeModal} openModal={openModal} isModalOpen={isModalOpen}/>
        </>
      )} */}
    </section>
  )
}


export default Portfolio