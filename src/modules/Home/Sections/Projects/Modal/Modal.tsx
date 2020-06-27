import React, { FunctionComponent, ReactElement, useState } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { IProject } from '../Projects'
import './styles.css'

interface IProps {
  hideModal(): void
  isVisible: boolean
  project: IProject
}

const Modal: FunctionComponent<IProps> = (props: IProps): ReactElement => {
  const { hideModal, isVisible, project } = props
  const modalNameForVisibility = isVisible ? '' : 'modal-display-none'
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
    <div id='project-modal' className={modalNameForVisibility}>
      <div className='modal-container'>
        <div className='modal-image'>
          <img src={project.photos[currentIndexOfImage].name} />
        </div>
        <div className='modal-team'>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
          <div>Hello World</div>
        </div>
      </div>
    </div>
  )
}

export default Modal
