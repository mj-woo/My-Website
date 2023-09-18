import Card from '../../components/Card'

const Project = ({project, closeModal, openModal, isModalOpen}) => {

    return (
        <div>
            <Card className='portfolio__project'>
                <div>
                    <img src={project.image} alt='Portfolio Project Pic' className="portfolio__project-image" />
                </div>
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <div className="portfolio__projects-cta">
                    <button className='btn sm' onClick={()=>openModal(project)}>View</button>
                    {project.demo ? (
                    <a href={project.demo} className='btn sm' target='_blank' rel='noopener noreferrer'>Demo</a>
                    ) : null}
                </div>
            </Card>
        </div>
    )
}

export default Project