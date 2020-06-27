import React, { FunctionComponent, ReactElement, useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { IProject } from '../Projects'
import './styles.css'

interface IProps {
  hideModal(): void
  isVisible: boolean
  modalId: string
  project: IProject
}

const Modal: FunctionComponent<IProps> = (props: IProps): ReactElement => {
  const { hideModal, isVisible, modalId, project } = props
  const modalNameForVisibility = isVisible ? 'modal' : 'modal modal-display-none'
  const [currentIndexOfImage, setImageIndex] = useState(0)

  const viewPrevImage = (): void => {
    const projectImageMaxIndex = project.photos.length - 1
    if (currentIndexOfImage === 0) {
      setImageIndex(projectImageMaxIndex)
    } else {
      setImageIndex(currentIndexOfImage - 1)
    }
  }

  const viewNextImage = (): void => {
    const projectImageMaxIndex = project.photos.length - 1
    if (currentIndexOfImage >= projectImageMaxIndex) {
      setImageIndex(0)
    } else {
      setImageIndex(currentIndexOfImage + 1)
    }
  }

  return (
    <div className={modalNameForVisibility} id={`modal-${modalId}`}>
      <div className='modal-container'>
        <div className='modal-tabs'>
          <h1>Screenshots</h1>
          <h1>Description</h1>
          <h1>Team Members</h1>
          {/* TODO: next and prev are temporary only */}
          <h1 onClick={viewPrevImage}>Prev</h1>
          <h1 onClick={viewNextImage}>Next</h1>
          <div className='modal-close' onClick={hideModal}>
            <FaWindowClose />
          </div>
        </div>
        <div className='modal-content'>
          <div className='modal-image-container'>
            <img className='project-images' src={project.photos[currentIndexOfImage].name} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
