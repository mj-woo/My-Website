import React from 'react'
import Card from '../../components/Card'

const Modal = ({project, closeModal, openModal, isModalOpen}) => {
      return (
        <Card className='modal-container'>
            <div className='modal-content'>
                <h3>{project.title}</h3>
                <span className="close" onClick={closeModal}>&times;</span>
                <p className='modal-date'>{project.desc}</p>
                <div className='left-align'>
                    <p style={{fontSize:'15px'}}><strong>Role: </strong>{project.role}</p>
                    <p style={{fontSize:'15px'}}><strong>Skills: </strong>{project.skills}</p>
                    {project.desc2 && <p style={{fontSize:'15px'}}> <strong>Background: </strong>{project.desc2}</p>}
                    <ul>
                        {
                            project.work.map((item,index) => (
                                <li key={index}>
                                    {item.title !== '0' && (
                                        <p>
                                            <strong><u className='underlined'>{item.title}</u></strong>
                                            {item.desc && <p className='desc'>{item.desc}</p>}
                                        </p>
                                    )}
                                    <ul>
                                        {item.worklist.map((work,subIndex) => (
                                            <li key = {subIndex} className='bullet-point-list'>{work} </li>
                                        ))}
                                    </ul>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </Card>
      )
}

export default Modal