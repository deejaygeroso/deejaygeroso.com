import React, { FunctionComponent, ReactElement } from 'react'
import './styles.css'

interface IProps {
  modalId: string
}

const Modal: FunctionComponent<IProps> = (props: IProps): ReactElement => {
  const { modalId } = props

  return (
    <div id={`modal-${modalId}`} className='modal'>
      <div className='modal-content'>
        <h1>This is a Modal</h1>
        <p>The quick brown fox.</p>
      </div>
    </div>
  )
}

export default Modal
