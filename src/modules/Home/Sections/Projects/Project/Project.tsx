import React, { FunctionComponent, ReactElement } from 'react'
import ScrollAnimation, { fadeInDirection } from '../ScrollAnimation/ScrollAnimation'
import { IProject } from '../Projects'

interface IProps {
  fadeInDirection: fadeInDirection.left | fadeInDirection.right
  project: IProject
  showModal(): void
}

const Project: FunctionComponent<IProps> = (props: IProps): ReactElement => {
  const { fadeInDirection: fadeInDirectionInput, project, showModal } = props
  const projectId = `project-${project.name.toLowerCase()}`
  const defaultPhotoIndex = 0
  return (
    <ScrollAnimation id={projectId} fadeInDirection={fadeInDirection[fadeInDirectionInput]}>
      <div className='project-container'>
        <h1 className='title-on-mobile'>{project.name}</h1>
        {fadeInDirection.right === fadeInDirectionInput && (
          <img className='card project-images' onClick={showModal} src={project.photos[defaultPhotoIndex].name} />
        )}
        <div className='project-info'>
          <h2 className='project-title'>
            {project.name}
            {project.domains.length !== 0 && (
              <span>
                {project.domains.map(
                  (domain: any, key: number): ReactElement => (
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
        {fadeInDirection.left === fadeInDirectionInput && (
          <img className='card project-images' onClick={showModal} src={project.photos[defaultPhotoIndex].name} />
        )}
      </div>
    </ScrollAnimation>
  )
}

export default Project
