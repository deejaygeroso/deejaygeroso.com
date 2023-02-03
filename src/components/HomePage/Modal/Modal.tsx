import React, { FunctionComponent, ReactElement, useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

import ModalMobile from '@/components/HomePage/ModalMobile'
import ModalTeam from '@/components/HomePage/ModalTeam'

import { IProject } from '@/common/interfaces'

import useOutsideAlerter from './outsideAlerter'
import './styles.css'

interface IProps {
  hideModal: () => void
  isVisible: boolean
  project: IProject
  viewNextProject: () => void
  viewPrevProject: () => void
}

const Modal: FunctionComponent<IProps> = (props: IProps): ReactElement => {
  const { hideModal, isVisible, project, viewNextProject, viewPrevProject } = props
  const modalNameForVisibility = isVisible ? '' : 'modal-display-none'
  // const [currentIndexOfImage, setImageIndex] = useState(0)

  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, hideModal, isVisible)

  // const viewPrevImage = (): void => {
  //   const projectImageMaxIndex = project.photos.length - 1
  //   if (currentIndexOfImage === 0) {
  //     setImageIndex(projectImageMaxIndex)
  //   } else {
  //     setImageIndex(currentIndexOfImage - 1)
  //   }
  // }

  // const viewNextImage = (): void => {
  //   const projectImageMaxIndex = project.photos.length - 1
  //   if (currentIndexOfImage >= projectImageMaxIndex) {
  //     setImageIndex(0)
  //   } else {
  //     setImageIndex(currentIndexOfImage + 1)
  //   }
  // }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  document.onkeydown = (evtInput: any): void => {
    const evt = evtInput || window.event
    // escape button
    if (evt.keyCode == 27) {
      hideModal()
    }
    // left arrow button
    if (evt.keyCode == 37) {
      viewPrevProject()
    }
    // right arrow button
    if (evt.keyCode == 39) {
      viewNextProject()
    }
  }

  return (
    <>
      <div className={modalNameForVisibility} id='project-modal'>
        <div className='modal-close-icon' onClick={hideModal}>
          <IoClose />
        </div>
        <div className='modal-container' ref={wrapperRef}>
          <div className='modal-right-arrow'>
            <IoIosArrowForward size={90} onClick={viewNextProject} />
          </div>
          <div className='modal-left-arrow'>
            <IoIosArrowBack size={90} onClick={viewPrevProject} />
          </div>
          <div className='modal-image'>
            <div className='modal-title'>
              <h1>{project.name}</h1>
            </div>
            <picture>
              <source srcSet={project.photos[0].webP} type='image/webp' />
              <source srcSet={project.photos[0].jpg} type='image/jpeg' />
              <img alt={project.photos[0].webP} src={project.photos[0].webP} />
            </picture>
          </div>
          <ModalTeam project={project} />
        </div>
      </div>
      <ModalMobile
        hideModal={hideModal}
        isVisible={isVisible}
        project={project}
        viewNextProject={viewNextProject}
        viewPrevProject={viewPrevProject}
      />
    </>
  )
}

export default Modal
