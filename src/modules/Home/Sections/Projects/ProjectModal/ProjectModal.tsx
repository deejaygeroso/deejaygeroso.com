import React, { FunctionComponent, ReactElement, ReactNode } from 'react'
import { FaWindowClose } from 'react-icons/fa'
import './styles.css'

interface IProps {
  children: ReactNode
  hideModal(): void
  isVisible: boolean
  modalId: string
}

const ProjectModal: FunctionComponent<IProps> = (props: IProps): ReactElement => {
  const { children, hideModal, isVisible, modalId } = props
  const modalNameForVisibility = isVisible ? 'modal' : 'modal modal-display-none'

  return (
    <div className={modalNameForVisibility} id={`modal-${modalId}`}>
      <div className='modal-container'>
        <div className='modal-tabs'>
          <h1>Photos</h1>
          <h1>Description</h1>
          <h1>Team Members</h1>
          <h1>Prev</h1>
          <h1>Next</h1>
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
