import React, { FunctionComponent, ReactElement, useState } from 'react'
import { IProject } from '../../../../common/interfaces'
import Modal from './Modal'
import Project from './Project'
import { fadeInDirection } from './ScrollAnimation/ScrollAnimation'
import projects from './projectsData'
import projectsData from './projectsData'
import './styles.css'

const Projects: FunctionComponent = (): ReactElement => {
  const [projectIndex, setProjectIndex] = useState(0)
  const [isModalVisible, toggleModal] = useState(false)

  const showModal = (selectedProjectIndex: number): void => {
    toggleModal(true)
    setProjectIndex(selectedProjectIndex)
  }

  const hideModal = (): void => {
    toggleModal(false)
  }

  const viewNextProject = (): void => {
    const totalProjectCount = projectsData.length - 1
    if (projectIndex < totalProjectCount) {
      setProjectIndex(projectIndex + 1)
    } else {
      setProjectIndex(0)
    }
  }

  const viewPrevProject = (): void => {
    const lastIndexOfProject = projectsData.length - 1
    if (projectIndex > 0) {
      setProjectIndex(projectIndex - 1)
    } else {
      setProjectIndex(lastIndexOfProject)
    }
  }

  return (
    <section id='projects'>
      <h1>PROJECTS</h1>
      <Modal
        isVisible={isModalVisible}
        hideModal={hideModal}
        project={projectsData[projectIndex]}
        viewNextProject={viewNextProject}
        viewPrevProject={viewPrevProject}
      />
      {projects.map((project: IProject, key: number): ReactElement => {
        const fadeInDirectionInput = key % 2 === 0 ? fadeInDirection.right : fadeInDirection.left
        return (
          <Project
            fadeInDirection={fadeInDirectionInput}
            key={key}
            project={project}
            showModal={(): void => showModal(key)}
          />
        )
      })}
    </section>
  )
}

export default Projects
