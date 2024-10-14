import './App.css'
import Circle from './Cirlce'
import { useEffect, useState } from 'react'

const RADIUS = 50

const calcDistance = (x1, y1, x2, y2) => {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
}

const isOverlapping = (x1, y1, x2, y2) => {
  const d = calcDistance(x1, y1, x2, y2)
  if (d <= 2 * RADIUS) return true
  return false
}

const generateRandomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
}


function App() {

  const [circleCoord, setCircleCoord] = useState([])

  const handleClick = (e) => {
    setCircleCoord(prevCoord => {
      const t = [...prevCoord]
      const newColor = generateRandomColor()
      for (let i = 0; i < t.length; i++) {
        if (isOverlapping(t[i].x, t[i].y, e.clientX, e.clientY)) {
          t[i].bgColor = newColor
        }
      }
      t.push({ x: e.clientX, y: e.clientY, bgColor: newColor })
      return t
    })
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click')
  }, [])

  return (
    <>
      {circleCoord.map((coord, index) => {
        return <Circle x={coord.x} y={coord.y} bgColor={coord.bgColor} key={index} />
      })}
    </>
  )
}

export default App
