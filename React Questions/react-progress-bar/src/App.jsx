import { useCallback, useMemo, useState } from 'react'
import './App.css'

function App() {
  const [progressPercentage, setProgressPercentage] = useState(0)
  const styleWidth = useMemo(() => `${progressPercentage}%`, [progressPercentage])

  const handleIncrement = useCallback(() => {
    setProgressPercentage(prev => {
      if (prev <= 80) {
        return prev + 20
      } else {
        return 0
      }
    })
  }, [setProgressPercentage])

  return (
    <>
      <div className='progress-bar'>
        <div className="progress-background" style={{ width: styleWidth }} >
          <p className='progress-text'>{progressPercentage} %</p>
        </div>
      </div >
      <button onClick={handleIncrement} className='increment-button'> Increment by 20</button >
    </>
  )
}

export default App
