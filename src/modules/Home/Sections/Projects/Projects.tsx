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
  const [projectIndex, setProjedtIndex] = useState(0)
  const [isModalVisible, toggleModal] = useState(false)
  const [currentIndexOfImage, setImageIndex] = useState(0)

  const showModal = (selectedProjectIndex: number): void => {
    toggleModal(true)
    setProjedtIndex(selectedProjectIndex)
  }

  const hideModal = (): void => {
    toggleModal(false)
  }

  const viewPrevImage = (): void => {
    setImageIndex(0)
  }
  const viewNextImage = (): void => {
    setImageIndex(1)
  }

  return (
    <section id='projects'>
      <h1>PROJECTS</h1>
      <ProjectModal
        isVisible={isModalVisible}
        hideModal={hideModal}
        modalId='1'
        viewNextImage={viewNextImage}
        viewPrevImage={viewPrevImage}>
        <div className='image-container'>
          <img className='project-images' src={projectsData[projectIndex].photos[currentIndexOfImage].name} />
        </div>
      </ProjectModal>
      {projects.map(
        (project: IProject, key: number): ReactElement => {
          const fadeInDirectionInput = key % 2 === 0 ? fadeInDirection.right : fadeInDirection.left
          return (
            <Project
              fadeInDirection={fadeInDirectionInput}
              key={key}
              project={project}
              showModal={(): void => showModal(key)}
            />
          )
        },
      )}
    </section>
  )
}

export default Projects
