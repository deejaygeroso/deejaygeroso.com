/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useOutsideAlerter = (ref: any, onClickOutside: () => void): void => {
  const mq = window.matchMedia('(min-width: 768px)')
  useEffect((): (() => void) => {
    if (mq.matches) {
      const handleClickOutside = (event: MouseEvent): void => {
        if (ref.current && !ref.current.contains(event.target)) {
          onClickOutside()
        }
      }

      document.addEventListener('mousedown', handleClickOutside)
      return (): void => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [ref, mq])
}

export default useOutsideAlerter
