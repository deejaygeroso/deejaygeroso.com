/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useOutsideAlerter = (ref: any, onClickOutside: () => void): void => {
  useEffect((): (() => void) => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return (): void => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

export default useOutsideAlerter
