import { FaLinkedin, FaUserCircle, MdClose } from 'react-icons/all'
import { IMember, IProject } from '../Projects'
import React, { FunctionComponent, ReactElement, useState } from 'react'
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

  const openLinkedIn = (url: string): void => {
    const win = window.open(url, '_blank')
    win.focus()
  }

  return (
    <div id='project-modal' className={modalNameForVisibility}>
      <div className='modal-close-icon' onClick={hideModal}>
        <MdClose />
      </div>
      <div className='modal-container'>
        <div className='modal-image'>
          <img src={project.photos[currentIndexOfImage].name} />
        </div>
        <div className='modal-team'>
          <div className='modal-member'>
            <h1>Team Members</h1>
          </div>
          {project.members.map(
            (member: IMember, key: number): ReactElement => (
              <div className='modal-member' key={key}>
                <div className='modal-member-profile-icon'>
                  {member.image ? <img src={member.image} /> : <FaUserCircle />}
                </div>
                <div className='modal-member-info'>
                  <h1>{member.name}</h1>
                  <p>{member.position}</p>
                  {member.linkedIn && (
                    <p className='linked-in-link' onClick={(): void => openLinkedIn(member.linkedIn)}>
                      <span>View Linked</span>
                      <FaLinkedin />
                    </p>
                  )}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
