import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { useRef } from 'react'


const inputGrid = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 1, 1],
]


function App() {

  const numOfActiveBlocks = useMemo(() => inputGrid.flat().reduce((acc, el) => acc += el, 0), [])

  const [selected, setSelected] = useState(new Set())
  const [isDeactivatingPhase, setIsDeactivatingPhase] = useState(false)
  const intervalId = useRef(null)

  const renderBlock = (id, isActive) => {
    if (isActive) {
      return (
        <div className={'block' + (selected.has(id.toString()) ? ' selected' : '')} data-id={id}>

        </div>
      )
    }
    else {
      return (
        <div className="hidden-block"></div>
      )
    }
  }

  const renderGrid = () => {
    const grid = []
    const rowCount = inputGrid.length

    inputGrid.forEach((row, rowIndex) => {
      const rowRendered = []
      row.forEach((el, elIndex) => {
        const blockId = rowCount * rowIndex + elIndex
        const block = renderBlock(blockId, el === 1)
        rowRendered.push(block)
      })

      const rowWrapped = (
        <div className="row">{rowRendered}</div>
      )

      grid.push(rowWrapped)
    })

    return grid
  }

  const handleClick = (event) => {
    const incomingId = event.target.getAttribute('data-id')
    if (incomingId) {
      if (selected.has(incomingId)) {
        setSelected(prev => {
          const modifiedSet = new Set(prev)
          modifiedSet.delete(incomingId)
          return modifiedSet
        })
      } else {
        setSelected(prev => new Set(prev).add(incomingId))
      }
    }
  }

  const deactiveCells = useCallback(() => {
    setSelected(prev => {
      const arr = Array.from(prev)
      arr.shift()
      return new Set(arr)
    })
  }, [])

  useEffect(() => {
    if (selected.size === numOfActiveBlocks) {
      setIsDeactivatingPhase(true)

      intervalId.current = setInterval(() => {
        deactiveCells()
      }, 0.5 * 1000)
    } else if (selected.size === 0) {
      clearInterval(intervalId.current)
      setIsDeactivatingPhase(false)
    }

  }, [selected, numOfActiveBlocks, deactiveCells])


  useEffect(() => {
    return () => {
      clearInterval(intervalId.current)
    }
  }, [])



  return (
    <div className="matrix" onClick={isDeactivatingPhase ? null : handleClick}>{renderGrid()}</div>
  )

}

export default App
