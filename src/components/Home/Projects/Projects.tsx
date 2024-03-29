import React, { FunctionComponent, ReactElement, useState } from 'react'
import { useContext } from 'react'

import { IAppContext, IProject } from '@/interfaces'

import Modal from '@/components/Home/Modal'
import Project from '@/components/Home/Project'
import { fadeInDirection } from '@/components/Home/ScrollAnimation/ScrollAnimation'

import { AppContext } from '@/context/useAppContext'

import './styles.css'

const Projects: FunctionComponent = (): ReactElement => {
  const [projectIndex, setProjectIndex] = useState(0)
  const [isModalVisible, toggleModal] = useState(false)
  const data: IAppContext = useContext(AppContext)
  const { projects } = data

  const hideScrollBarFromTheBackground = (): void => {
    const scrollY = window.scrollY
    const app = document.getElementById('app') as HTMLElement
    app.style.position = 'fixed'
    app.style.top = `-${scrollY}px`
    app.style.zIndex = '9999999999'
  }

  const showScrollBarOfThePage = (): void => {
    const app = document.getElementById('app') as HTMLElement
    const scrollY = app.style.top
    app.style.position = ''
    app.style.top = ''
    app.style.zIndex = '1'
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }

  const showModal = (selectedProjectIndex: number): void => {
    toggleModal(true)
    setProjectIndex(selectedProjectIndex)
    hideScrollBarFromTheBackground()
  }

  const hideModal = (): void => {
    showScrollBarOfThePage()
    toggleModal(false)
  }

  const viewNextProject = (): void => {
    const totalProjectCount = projects.length - 1
    if (projectIndex < totalProjectCount) {
      setProjectIndex(projectIndex + 1)
    } else {
      setProjectIndex(0)
    }
  }

  const viewPrevProject = (): void => {
    const lastIndexOfProject = projects.length - 1
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
        hideModal={hideModal}
        isVisible={isModalVisible}
        project={projects[projectIndex]}
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
