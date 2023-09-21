import './portfolio.css'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import data from './data'
import {useState} from 'react'
import { Link } from 'react-router-dom'
import ModalHome from './Modalhome'
import Navbar from '../navbar/Navbar'


export const PortfolioHome = () => {
  const [projects, setProjects] = useState(data); 

  const categories = data.flatMap(item => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  const filterProjectsHandler = (category) => {
    if(category === "all"){
      setProjects(data);
      return;
    }
    const filterProjects = data.filter(project => project.category.includes(category)); 
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
      document.body.style.overflow = 'hidden';
  };

  const handleReload = () => {
    window.scrollTo(0,0);
  };

  return (
    <section id="portfolio" className='portfolio__container'>
      <Navbar closeModal={closeModal} />
      <h2>
        Recent Work
      </h2>
      <div className='portfolio__viewall'>
        <Link to="/portfolio" onClick={handleReload}>View all</Link>
      </div>
      <div className="container portfolio__container">
        <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler} />
        <Projects projects={projects} closeModal={closeModal} openModal={openModal} isModalOpen={isModalOpen}/>
        {isModalOpen && (
            <>
            <div className="full-page-overlay"></div>
            <ModalHome project={selectedProject} closeModal={closeModal} openModal={openModal} isModalOpen={isModalOpen}/>
            </>
        )}
      </div>
      {/* {isModalOpen && (
        <>
          <div className="full-page-overlay"></div>
          <ModalHome project={selectedProject} closeModal={closeModal} openModal={openModal} isModalOpen={isModalOpen}/>
        </>
      )} */}
    </section>
  )
}


export default PortfolioHome