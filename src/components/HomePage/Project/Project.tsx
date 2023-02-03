import React, { FunctionComponent, ReactElement } from 'react'

import ProjectInfo from '@/components/HomePage/ProjectInfo'
import ScrollAnimation, { fadeInDirection } from '@/components/HomePage/ScrollAnimation/ScrollAnimation'
import { IProject } from '@/interfaces'

import './styles.css'

interface IProps {
  fadeInDirection: fadeInDirection.left | fadeInDirection.right
  project: IProject
  showModal: () => void
}

const Project: FunctionComponent<IProps> = (props: IProps): ReactElement => {
  const { fadeInDirection: fadeInDirectionInput, project, showModal } = props
  const projectId = `project-${project.name.toLowerCase()}`
  const defaultPhotoIndex = 0

  const renderProjectPhoto = (
    projectInput: IProject,
    direction: fadeInDirection.left | fadeInDirection.right,
  ): ReactElement => {
    if (fadeInDirection[direction] === fadeInDirectionInput) {
      return (
        <picture>
          <source srcSet={projectInput.photos[defaultPhotoIndex].webP} type='image/webp' />
          <source srcSet={projectInput.photos[defaultPhotoIndex].jpg} type='image/jpeg' />
          <img
            alt={projectInput.photos[defaultPhotoIndex].webP}
            className='card project-images'
            src={projectInput.photos[defaultPhotoIndex].webP}
            onClick={showModal}
          />
        </picture>
      )
    }
    return <></>
  }

  return (
    <ScrollAnimation fadeInDirection={fadeInDirection[fadeInDirectionInput]} id={projectId}>
      <div className='project-container'>
        <h1 className='title-on-mobile'>{project.name}</h1>
        {renderProjectPhoto(project, fadeInDirection.right)}
        <ProjectInfo project={project} />
        {renderProjectPhoto(project, fadeInDirection.left)}
      </div>
    </ScrollAnimation>
  )
}

export default Project
