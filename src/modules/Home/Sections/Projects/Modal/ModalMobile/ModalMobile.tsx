import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import React, { FunctionComponent, ReactElement, useState } from 'react'
import { IProject } from '../../../../../../common/interfaces'
import ModalTeam from '../ModalTeam'
import { ProjectInfo } from '../../../../../../common/components'
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
  const [isTeamView, toggleView] = useState(false)
  const modalNameForVisibility = isVisible ? '' : 'modal-display-none'

  const handleToggleView = (): void => {
    toggleView(!isTeamView)
  }

  return (
    <div id='project-modal-mobile' className={modalNameForVisibility}>
      <div className='modal-title'>
        <h1>{project.name}</h1>
      </div>
      {isTeamView ? (
        <ModalTeam project={project} />
      ) : (
        <>
          {/* <h1>About</h1> */}
          <ProjectInfo project={project} />
        </>
      )}
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
      <div id='project-modal-mobile-toggle' onClick={handleToggleView}>
        {isTeamView ? 'View About' : 'View Team'}
      </div>
    </div>
  )
}

export default ModalMobile
