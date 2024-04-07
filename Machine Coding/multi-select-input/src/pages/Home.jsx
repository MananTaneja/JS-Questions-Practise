import { useEffect } from 'react'
import { useState, useRef } from 'react'

const optionsData = [
	{
		id: 0,
		displayText: 'Option 1',
	},
	{
		id: 1,
		displayText: 'Option 2',
	},
	{
		id: 2,
		displayText: 'Option 3',
	},
	{
		id: 3,
		displayText: 'Option 4',
	},
	{
		id: 4,
		displayText: 'Option 5',
	},
	{
		id: 5,
		displayText: 'Option 6',
	},
]

function Home() {
	const renderOptionButton = (data) => {
		if (selectedOptionsSet.current.has(data.id)) return

		return (
			<li
				key={data.id}
				className='text-center'
				onClick={() => addSelectedOption(data.id)}
			>
				<p>{data.displayText}</p>
			</li>
		)
	}

	const renderOptionList = (data) => {}

	const renderSelectedPill = (data) => {
		console.log(data)
		return (
			<span
				className='rounded-full bg-blue-400 text-white text-sm px-2 py-1 cursor-pointer'
				onClick={() => removeSelectedOption(data.id)}
			>
				{data.displayText}
				<span className='text-black mx-2'>X</span>
			</span>
		)
	}

	const [selectedOptions, setSelectedOptions] = useState([])
	const selectedOptionsSet = useRef(new Set())

	const addSelectedOption = (id) => {
		setSelectedOptions([...selectedOptions, id])
		selectedOptionsSet.current.add(id)
		console.log(selectedOptions)
		console.log(selectedOptionsSet.current)
	}

	const removeSelectedOption = (id) => {
		selectedOptionsSet.current.delete(id)
		setSelectedOptions(selectedOptions.filter((opt) => opt !== id))
	}

	const listRef = useRef(null)

	// adding event listener for bubbling to
	// Unnecessary - React uses synthetic events that would already has similar optimization
	useEffect(() => {
		// if (listRef?.current) {
		// 	listRef.current.addEventListener('click', (e) => {
		// 		console.log(e)
		// 	})
		// }
	}, [])

	return (
		<div>
			<div className='flex border-2 rounded-lg border-blue-500'>
				{selectedOptions &&
					selectedOptions.length > 0 &&
					selectedOptions.map((selectedOption) =>
						renderSelectedPill(optionsData[selectedOption])
					)}
				<input
					type='text'
					className='grow ml-2 border-0 focus:border-0 focus:outline-none'
				></input>
			</div>
			<ul
				className='list'
				ref={listRef}
			>
				{optionsData.map((optionData) => {
					return renderOptionButton(optionData)
				})}
			</ul>
		</div>
	)
}

export default Home
