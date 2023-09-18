import Project from './Project'

const Projects = ({projects, closeModal, openModal, isModalOpen}) => {
  return (
    <div className="portfolio__projects" data-aos='fade-up'>
        {
            projects.map(project => (
             <Project key={projects.id} project={project} closeModal={closeModal} openModal={openModal} isModalOpen={isModalOpen}/>   
            ))
        }
    </div>
  )
}

export default Projects