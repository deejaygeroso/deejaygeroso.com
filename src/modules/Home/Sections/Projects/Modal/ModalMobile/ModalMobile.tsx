import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import React, { FunctionComponent, ReactElement, useState } from 'react'
import { BsBuilding } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import { IProject } from '../../../../../../common/interfaces'
import { MdClose } from 'react-icons/md'
import ModalTeam from '../ModalTeam'
import ProjectInfo from '../../ProjectInfo'
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

  const renderToggleTeamButton = (): ReactElement => {
    if (isTeamView) {
      return <HiUserGroup />
    }

    return <BsBuilding />
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
          <h1 className='modal-company'>About The Company</h1>
          <picture className='modal-project-image-wrapper'>
            <source srcSet={project.photos[0].webP} type='image/webp' />
            <source srcSet={project.photos[0].jpg} type='image/jpeg' />
            <img alt={project.photos[0].webP} className='modal-project-image' src={project.photos[0].webP} />
          </picture>
          <ProjectInfo project={project} />
        </>
      )}
      <div id='project-modal-mobile-menu'>
        <div onClick={viewPrevProject}>
          <IoIosArrowBack />
        </div>
        <div onClick={hideModal}>
          <MdClose />
        </div>
        <div onClick={handleToggleView} className='modal-toggle-team'>
          {renderToggleTeamButton()}
        </div>
        <div onClick={viewNextProject}>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  )
}

export default ModalMobile
