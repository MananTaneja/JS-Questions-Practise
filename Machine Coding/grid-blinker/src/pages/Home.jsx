import { useState, useEffect, useRef } from 'react'
function Home({ rows, cols }) {
	const [selected, setSelected] = useState([])
	let deactivatingSequence = useRef(false)
	let timerId = useRef(0)

	function renderBlock(id) {
		if (selected.indexOf(id) === -1) {
			return (
				<div
					className='h-20 w-20 border-2 border-black'
					data-id={id.toString()}
					onClick={() => handleCellClick(id)}
				>
					{id}
				</div>
			)
		}

		return (
			<div
				className='h-20 w-20 border-2 border-black bg-red-300'
				data-id={id.toString()}
			>
				{id}
			</div>
		)
	}

	function handleCellClick(id) {
		setSelected([...selected, Number(id)])
	}

	// useEffect(() => {
	// 	gridContainer.current.addEventListener('click', (e) => {
	// 		const id = e.target.dataset.id
	// 		console.log(id)
	// 		setSelected((prev) => [...prev, Number(id)])
	// 	})
	// }, [])

	function deactivateCell() {
		const t = [...selected]
		const id = t.pop()
		timerId.current = setTimeout(() => {
			console.log('removing', id)
			setSelected(t)
		}, 1 * 1000)
	}

	useEffect(() => {
		if (selected.length === rows * cols) {
			console.log('all selected')
			deactivatingSequence.current = true
			deactivateCell()
		} else if (selected.length === 0) {
			deactivatingSequence.current = false
		} else {
			if (deactivatingSequence.current) {
				deactivateCell()
			}
		}

		return () => {
			if (timerId.current) clearTimeout(timerId.current)
		}
	}, [selected])

	function renderRow(cols, rowIndex) {
		const row = []
		for (let i = 0; i < cols; i++) {
			const blockId = rowIndex * cols + i
			row.push(renderBlock(blockId))
		}
		return <div className='flex flex-row gap-2'>{row}</div>
	}

	function renderGrid(rows, cols) {
		const grid = []

		for (let i = 0; i < rows; i++) {
			grid.push(renderRow(cols, i))
		}

		return grid
	}

	return (
		<div className='h-screen flex justify-center items-center'>
			<div className='flex flex-col gap-2 p-4 border-2 border-black border-r-2 w-fit'>
				{renderGrid(rows, cols)}
			</div>
		</div>
	)
}

export default Home

/* 

Things to do:
1. Correct the set state array appending - working
2. Logic to do updates in reverse order
3. Try to do the alignment via grid instead of flex
4. Use Memoization hooks - somewhere

*/
