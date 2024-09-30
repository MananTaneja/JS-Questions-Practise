import { useCallback, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [progressPercentage, setProgressPercentage] = useState(0)
  const styleWidth = useMemo(() => `${progressPercentage}%`, [progressPercentage])
  const borderRadius = useMemo(() => {
    if (progressPercentage === 100) {
      return '16px'
    } else {
      return '16px 0 0 16px'
    }
  }, [progressPercentage])

  const handleIncrement = useCallback(() => {
    setProgressPercentage((prev) => {
      if (prev <= 80) {
        return prev + 20
      } else {
        return 0
      }
    })
  }, [setProgressPercentage])
  const handleDecrement = useCallback(() => {
    setProgressPercentage((prev) => {
      if (prev >= 20) {
        return prev - 20
      } else {
        return 100
      }
    })
  }, [setProgressPercentage])

  return (
    <>
      <div
        className='progress-bar'
        role='progressbar'
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={progressPercentage.toString()}
      >
        <div
          className='progress-background'
          style={{ width: styleWidth, borderRadius: borderRadius }}
        >
          <p className='progress-text'>{progressPercentage} %</p>
        </div>
      </div>
      <button
        onClick={handleIncrement}
        className='button'
        tabIndex={2}
      >
        Increment by 20
      </button>
      <button
        onClick={handleDecrement}
        className='button'
        tabIndex={1}
      >
        Decrement by 20
      </button>
    </>
  )
}

export default App

/* 
  making this scalable

  1. have initial progress count instead of 0
  2. output 2 functions - increment and decrement - pass it above as ref, or have an event emitter for this
  3. have an increment / decrement unit - say 20 (which would mean 5 parts) - ideally should not be required - we can just use the props and check for older 
  4. Add callbacks on complete, on reset, etc


  making this accessible

  1. progress percentage should be screen reader enabled
  2. color blindness - theme should handle that
  3. keyboard accessibility - tab index for navigation and increment via keyboard

*/
