import { useEffect, useState } from 'react'
function Home({ rows, cols }) {
	const [selected, setSelected] = useState(new Set())
	const [disableClick, setDisableClick] = useState(false)

	function renderBlock(id) {
		if (!selected.has(id.toString())) {
			return (
				<div
					className='h-20 w-20 border-2 border-black'
					data-id={id.toString()}
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

	const handleClick = (event) => {
		const selectedId = event.target.getAttribute('data-id')

		if (!selectedId) return
		const currentSelection = selected

		if (selected.has(selectedId)) {
			currentSelection.delete(selectedId)
		} else {
			currentSelection.add(selectedId)
		}

		setSelected(new Set(currentSelection))
	}

	const removeLastElement = () => {

	}

	useEffect(() => {
		let intervalId
		if (selected.size === rows * cols) {
			setDisableClick(true)
			intervalId = setInterval(() => {
				console.log('setInterval is being executed')
				if (selected.size >= 0) {
					setSelected(prev => {
						const order = Array.from(prev)
						const elementToRemove = order.pop()
						console.log('set selected', order, elementToRemove)

						return new Set(order)
					})
				} else {
					clearInterval(intervalId)
				}
			}, 1 * 1000)
		}

		if (selected.size === 0) {
			setDisableClick(false)
		}

		return () => {
			clearInterval(intervalId)
		}

	}, [selected, setSelected, disableClick, setDisableClick, rows, cols])

	return (
		<div className='h-screen justify-center items-center'>
			<div className='flex flex-col gap-2 p-4 border-2 border-black border-r-2 w-fit' onClick={disableClick ? null : handleClick}>
				{renderGrid(rows, cols)}
			</div>
			<div>Selected: {Array.from(selected).toString()}</div>
		</div>
	)
}

export default Home
