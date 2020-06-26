import React, { FunctionComponent, ReactElement, ReactNode } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import './styles.css'

interface IProps {
  children: ReactNode
  hideModal(): void
  isVisible: boolean
  modalId: string
  viewNextImage(): void
  viewPrevImage(): void
}

const ProjectModal: FunctionComponent<IProps> = (props: IProps): ReactElement => {
  const { children, hideModal, isVisible, modalId, viewNextImage, viewPrevImage } = props
  const modalNameForVisibility = isVisible ? 'modal' : 'modal modal-display-none'

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
        <div className='modal-content'>{children}</div>
      </div>
    </div>
  )
}

export default ProjectModal
