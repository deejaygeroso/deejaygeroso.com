import React, { FunctionComponent, ReactElement } from 'react'
import ScrollAnimation, { fadeInDirection } from '../ScrollAnimation/ScrollAnimation'
import { IProject } from '../../../../../common/interfaces'
import { ProjectInfo } from '../../../../../common/components'
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

  const renderProjectPhoto = (projectInput: IProject, direction: string): ReactElement => {
    if (fadeInDirection[direction] === fadeInDirectionInput) {
      return (
        <picture>
          <source srcSet={projectInput.photos[defaultPhotoIndex].webP} type='image/webp' />
          <source srcSet={projectInput.photos[defaultPhotoIndex].jpg} type='image/jpeg' />
          <img
            alt={projectInput.photos[defaultPhotoIndex].webP}
            className='card project-images'
            onClick={showModal}
            src={projectInput.photos[defaultPhotoIndex].webP}
          />
        </picture>
      )
    }
    return null
  }

  return (
    <ScrollAnimation id={projectId} fadeInDirection={fadeInDirection[fadeInDirectionInput]}>
      <div className='project-container'>
        <h1 className='title-on-mobile'>{project.name}</h1>
        {renderProjectPhoto(project, 'right')}
        <ProjectInfo project={project} />
        {renderProjectPhoto(project, 'left')}
      </div>
    </ScrollAnimation>
  )
}

export default Project
