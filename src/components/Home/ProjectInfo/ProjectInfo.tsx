import React, { FunctionComponent, ReactElement } from 'react'

import { IDomain, IProject } from '@/interfaces'

import './styles.css'

interface IProps {
  project: IProject
}

const ProjectInfo: FunctionComponent<IProps> = (props: IProps): ReactElement => {
  const { project } = props
  return (
    <div className='project-info'>
      <h2 className='project-title'>
        {project.name}
        {project.domains.length !== 0 && (
          <span>
            {project.domains.map(
              (domain: IDomain, key: number): ReactElement => (
                <a href={domain.url} key={key} rel='noopener noreferrer' target='_blank'>
                  {domain.name}
                </a>
              ),
            )}
          </span>
        )}
      </h2>
      <p className='project-position'>{project.position}</p>
      {project.address && <p className='project-address'>{project.address}</p>}
      {project.date && <p className='project-date'>{project.date}</p>}
      <p>{project.description}</p>
      {project.technology.length === 0 ? (
        <p>
          Technologies: <span className='warning'>Cannot disclose publicly!</span>
        </p>
      ) : (
        <>
          <p>Technologies</p>
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
  )
}

export default ProjectInfo
