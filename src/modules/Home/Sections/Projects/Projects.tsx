import React, { FunctionComponent, ReactElement, useState } from 'react'
import ProjectModal from './ProjectModal'
import projectsData from './projectsData'
import { fadeInDirection } from './ScrollAnimation/ScrollAnimation'
import Project from './Project'
import projects from './projectsData'
import './styles.css'

export interface IProject {
  description: string
  domains: {
    name: string
    url: string
  }[]
  name: string
  photos: {
    name: string
  }[]
  position: string
  technology: string[]
}

const Projects: FunctionComponent = (): ReactElement => {
  const [isModalVisible, toggleModal] = useState(false)

  const showModal = (): void => {
    toggleModal(true)
  }

  const hideModal = (): void => {
    toggleModal(false)
  }

  return (
    <section id='projects'>
      <h1>PROJECTS</h1>
      <ProjectModal isVisible={isModalVisible} hideModal={hideModal} modalId='1'>
        <div className='image-container'>
          <img className='project-images' src={projectsData[0].photos[0].name} />
        </div>
      </ProjectModal>
      {projects.map(
        (project: IProject, key: number): ReactElement => {
          const fadeInDirectionInput = key % 2 === 0 ? fadeInDirection.right : fadeInDirection.left
          return <Project fadeInDirection={fadeInDirectionInput} key={key} project={project} showModal={showModal} />
        },
      )}
    </section>
  )
}

export default Projects
