import React, { FunctionComponent, ReactElement, ReactNode, useRef } from 'react'

export enum fadeInDirection {
  left = 'left',
  right = 'right',
}

interface IProps {
  children: ReactNode
  fadeInDirection: fadeInDirection.left | fadeInDirection.right
  id: string
}

const ScrollAnimation: FunctionComponent<IProps> = (props: IProps): ReactElement => {
  const { id, children, fadeInDirection } = props
  const inputElement = useRef<HTMLDivElement>(null)
  const fadeIn = {
    left: 'animate__fadeInLeft',
    right: 'animate__fadeInRight',
  }

  const isInViewport = (offset = 0): boolean => {
    if (!inputElement.current) {
      return false
    }
    const top = inputElement.current.getBoundingClientRect().top
    return top + offset >= 0 && top - offset <= window.innerHeight
  }

  window.addEventListener(
    'scroll',
    (): void => {
      if (isInViewport()) {
        const divElement = document.getElementById(id)
        if (divElement) {
          divElement.classList.add(fadeIn[fadeInDirection])
        }
      }
    },
    false,
  )

  return (
    <div className='animate__animated ' id={id} ref={inputElement}>
      {children}
    </div>
  )
}

export default ScrollAnimation
