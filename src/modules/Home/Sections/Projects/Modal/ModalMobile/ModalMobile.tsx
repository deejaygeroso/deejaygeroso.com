import { FaLongArrowAltLeft, FaLongArrowAltRight, MdClose } from 'react-icons/all'
import React, { FunctionComponent, ReactElement } from 'react'
import { IProject } from '../../Projects'
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
    </div>
  )
}

export default ModalMobile
