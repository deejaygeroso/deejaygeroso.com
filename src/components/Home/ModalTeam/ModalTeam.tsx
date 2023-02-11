import React, { FunctionComponent, ReactElement } from 'react'
import { FaLinkedin, FaUserCircle } from 'react-icons/fa'

import { IMember, IProject } from '../../../../../../common/interfaces'
import './styles.css'

interface IProps {
  project: IProject
}

const ModalTeam: FunctionComponent<IProps> = (props: IProps): ReactElement => {
  const { project } = props
  const openLinkedIn = (url: string): void => {
    const win: Window | null = window.open(url, '_blank')
    win && win.focus()
  }
  return (
    <div className='modal-team'>
      <div className='modal-member'>
        <h1>Team Members</h1>
      </div>
      {project.members.map(
        (member: IMember, key: number): ReactElement => (
          <div className='modal-member' key={key}>
            <div className='modal-member-profile-icon'>
              {member.photo.webP && member.photo.jpg ? (
                <picture>
                  <source srcSet={member.photo.webP} type='image/webp' />
                  <source srcSet={member.photo.jpg} type='image/jpeg' />
                  <img alt={member.photo.webP} src={member.photo.webP} />
                </picture>
              ) : (
                <FaUserCircle />
              )}
            </div>
            <div className='modal-member-info'>
              <h1>{member.name}</h1>
              <p className='modal-member-position'>{member.position}</p>
              {member.linkedIn && (
                <p className='linked-in-link' onClick={(): void => openLinkedIn(member.linkedIn)}>
                  <span>View Linked</span>
                  &nbsp;
                  <FaLinkedin />
                </p>
              )}
            </div>
          </div>
        ),
      )}
    </div>
  )
}

export default ModalTeam
