import { FaLongArrowAltLeft, FaLongArrowAltRight, MdClose } from 'react-icons/all'
import { IDomain, IProject } from '../../Projects'
import React, { FunctionComponent, ReactElement } from 'react'
import ModalTeam from '../ModalTeam'
import './styles.css'

interface IProps {
  isVisible: boolean
  hideModal: () => void
  project: IProject
  viewNextProject: () => void
  viewPrevProject: () => void
}

const ModalMobile: FunctionComponent<IProps> = (props: IProps): ReactElement => {
  const { isVisible, hideModal, project, viewNextProject, viewPrevProject } = props
  const modalNameForVisibility = isVisible ? '' : 'modal-display-none'
  return (
    <div id='project-modal-mobile' className={modalNameForVisibility}>
      <div className='modal-title'>
        <h1>{project.name}</h1>
      </div>
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
      <ModalTeam project={project} />
      <div id='project-modal-mobile-menu'>
        <div onClick={viewPrevProject}>
          <FaLongArrowAltLeft />
        </div>
        <div onClick={hideModal}>
          <MdClose />
        </div>
        <div onClick={viewNextProject}>
          <FaLongArrowAltRight />
        </div>
      </div>
      <div id='project-modal-mobile-toggle'>View About</div>
    </div>
  )
}

export default ModalMobile
