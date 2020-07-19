import { FaLinkedin, FaUserCircle, IoIosArrowBack, IoIosArrowForward, MdClose } from 'react-icons/all'
import { IMember, IProject } from '../Projects'
import React, { FunctionComponent, ReactElement, useRef } from 'react'
import useOutsideAlerter from './outsideAlerter'
import './styles.css'

interface IProps {
  hideModal(): void
  isVisible: boolean
  project: IProject
  viewNextProject(): void
  viewPrevProject(): void
}

const Modal: FunctionComponent<IProps> = (props: IProps): ReactElement => {
  const { hideModal, isVisible, project, viewNextProject, viewPrevProject } = props
  const modalNameForVisibility = isVisible ? '' : 'modal-display-none'
  // const [currentIndexOfImage, setImageIndex] = useState(0)

  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef, hideModal)

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

  const openLinkedIn = (url: string): void => {
    const win = window.open(url, '_blank')
    win.focus()
  }

  document.onkeydown = (): void => {
    hideModal()
  }

  return (
    <div id='project-modal' className={modalNameForVisibility}>
      <div className='modal-close-icon' onClick={hideModal}>
        <MdClose />
      </div>
      <div ref={wrapperRef} className='modal-container'>
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
          <img src={project.photos[0].name} />
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
