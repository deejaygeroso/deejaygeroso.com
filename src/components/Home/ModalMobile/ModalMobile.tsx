import React, { FunctionComponent, ReactElement, useState } from 'react'
import { BsBuilding } from 'react-icons/bs'
import { HiUserGroup } from 'react-icons/hi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { MdClose } from 'react-icons/md'

import { IProject } from '@/interfaces'

import ModalTeam from '@/components/Home/ModalTeam'
import ProjectInfo from '@/components/Home/ProjectInfo'

import './styles.css'

interface IProps {
  hideModal: () => void
  isVisible: boolean
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
    <div
      className={modalNameForVisibility}
      id='project-modal-mobile'>
      <div id='project-modal-content'>
        <div className='modal-title'>
          <h1>{project.name}</h1>
        </div>
        {isTeamView ? (
          <ModalTeam project={project} />
        ) : (
          <>
            <h1 className='modal-company'>About The Company</h1>
            <picture className='modal-project-image-wrapper'>
              <source
                srcSet={project.photos[0].webP}
                type='image/webp'
              />
              <source
                srcSet={project.photos[0].jpg}
                type='image/jpeg'
              />
              <img
                alt={project.photos[0].webP}
                className='modal-project-image'
                src={project.photos[0].webP}
              />
            </picture>
            <ProjectInfo project={project} />
          </>
        )}
      </div>
      <div id='project-modal-mobile-empty-space' />
      <div id='project-modal-mobile-menu'>
        <div onClick={viewPrevProject}>
          <IoIosArrowBack />
        </div>
        <div onClick={hideModal}>
          <MdClose />
        </div>
        <div
          className='modal-toggle-team'
          onClick={handleToggleView}>
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
