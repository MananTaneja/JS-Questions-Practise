import { useEffect, useState } from 'react'
function Home() {
	// todo: move this to parent component
	const [data, setData] = useState([])
	const [selected, setSelected] = useState([])
	const [leftData, setLeftData] = useState([])
	const [rightData, setRightData] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((res) => res.json())
			.then((res) => {
				const page = res.slice(0, 20)
				console.log(page)
				setData(page)
				const ids = page.map((data) => data.id)
				setLeftData(ids)
			})
	}, [])

	const toggleSelected = (id) => {
		if (selected.includes(id)) {
			const filtered = selected.filter((id) => id !== id)
			console.log(selected, filtered)
			setSelected(filtered)
		} else {
			setSelected([...selected, id])
		}
	}

	const itemById = (id) => {
		return data.filter((d) => d.id === id)[0]
	}

	const renderItem = (itemId) => {
		// render styling for selected and unselected
		const item = itemById(itemId)
		if (!item) return
		return (
			<div key={itemId}>
				<button onClick={() => toggleSelected(item.id)}>
					<div className='flex gap-2 text-left'>
						<input
							type='checkbox'
							checked={selected.includes(item.id)}
							readOnly
						></input>
						<p className='item-text'>{item.title}</p>
					</div>
				</button>
			</div>
		)
	}

	const moveLeft = () => {
		const rS = new Set(rightData)
		const lS = new Set([...leftData, ...selected])

		selected.forEach((id) => {
			if (rS.has(id)) {
				rS.delete(id)
			}
		})

		setRightData([...rS])
		setLeftData([...lS])
		setSelected([])
	}

	const moveRight = () => {
		const lS = new Set(leftData)
		const rS = new Set([...rightData, ...selected])

		selected.forEach((id) => {
			if (lS.has(id)) {
				lS.delete(id)
			}
		})

		setRightData([...rS])
		setLeftData([...lS])
		setSelected([])
	}

	const renderItemList = (items) => {
		return items.map((item) => renderItem(item))
	}

	return (
		<div>
			<div className='container'>
				<div className='sidebar'>
					{leftData && leftData.length && renderItemList(leftData)}
				</div>
				<div className='button-list'>
					<button
						onClick={() => moveLeft()}
						className='move-button'
					>
						Move Left
					</button>
					<button
						onClick={() => moveRight()}
						className='move-button'
					>
						Move Right
					</button>
				</div>
				<div className='sidebar'>
					{rightData && rightData.length && renderItemList(rightData)}
				</div>
			</div>
		</div>
	)
}

export default Home

/* 
    Components
    1. Item
    2. Item List
    3. Tab
    4. Buttons
*/
