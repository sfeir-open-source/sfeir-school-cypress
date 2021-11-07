import { useState, useEffect } from 'react'

export default function useScrollListener (onScrollBottom : (() => Promise<void>) | null) {
  const [workInProgress, setWorkInProgress] = useState<boolean>(false)

  useEffect(() => {
    const listener = () => {
      if (workInProgress || !onScrollBottom) {
        return
      }

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        setWorkInProgress(true)

        onScrollBottom().finally(() => {
          setWorkInProgress(false)
        })
      }
    }

    listener()

    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [onScrollBottom, workInProgress])
}
