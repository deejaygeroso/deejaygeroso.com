import { IDomain, IProject } from '../Projects'
import React, { FunctionComponent, ReactElement } from 'react'
import ScrollAnimation, { fadeInDirection } from '../ScrollAnimation/ScrollAnimation'
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
        <div className='project-info'>
          <h2 className='project-title'>
            {project.name}
            {project.domains.length !== 0 && (
              <span>
                {project.domains.map(
                  (domain: IDomain, key: number): ReactElement => (
                    <a href={domain.url} key={key} target='_blank' rel='noopener noreferrer'>
                      {domain.name}
                    </a>
                  ),
                )}
              </span>
            )}
          </h2>
          <p>{project.description}</p>
          <p>Position: {project.position}</p>
          {project.technology.length === 0 ? (
            <p>
              Technology: <span className='warning'>Cannot disclose publicly!</span>
            </p>
          ) : (
            <>
              <p>Technology</p>
              <ul>
                {project.technology.map(
                  (tech: string, key: number): ReactElement => (
                    <li key={key}>{tech}</li>
                  ),
                )}
              </ul>
            </>
          )}
        </div>
        {renderProjectPhoto(project, 'left')}
      </div>
    </ScrollAnimation>
  )
}

export default Project
