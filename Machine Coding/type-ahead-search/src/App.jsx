import { forwardRef } from 'react'
import { useEffect, useRef, useState } from 'react'
import './App.css'

const debounce = (inputFn, timeout) => {
	let timerId = null
	const debouncedFn = (...args) => {
		clearTimeout(timerId)
		timerId = setTimeout(() => inputFn.apply(this, args), timeout)
	}
	debouncedFn.cancel = () => {
		clearTimeout(timerId)
	}

	return debouncedFn
}

const SearchBar = forwardRef(({ onInputChange }, inputRef) => {
	return (
		<>
			<label htmlFor='input-search'>Search</label>
			<input
				name='input-search'
				type={'text'}
				placeholder='Search'
				ref={inputRef}
			/>
		</>
	)
})

const Item = ({ data }) => {
	return (
		<li className='list-item'>
			<div className='item'>
				<p>{data.name}</p>
			</div>
		</li>
	)
}

const ListItems = ({ data, isLoading, isVisible, handleItemClick }) => {
	if (!isVisible) return null
	const listRef = useRef(null)

	useEffect(() => {
		if (listRef && listRef.current) listRef.current.addEventListener('click', handleItemClick)
	})

	if (isLoading) {
		return (
			<div className='list-loading'>
				<p>Loading...</p>
			</div>
		)
	}

	if (data && data.length > 0) {
		return (
			<ul
				className='data-list'
				ref={listRef}
			>
				{data.map((item) => (
					<Item
						data={item}
						key={item.id}
					/>
				))}
			</ul>
		)
	}

	return null
}

const limit = 10
const skip = 0

const fetchData = (searchTerm, skip) =>
	fetch(`https://dummyjson.com/recipes/search?q=${searchTerm}&limit=${limit}&skip=${skip}`).then(
		(res) => res.json()
	)
function App() {
	const [isLoading, setIsLoading] = useState(false)
	const [isError, setIsError] = useState(false)
	const [data, setData] = useState([])
	const [isListVisible, setIsListVisible] = useState(true)
	const touchableAreaRef = useRef(null)
	const outsideTouchableRef = useRef(null)
	const inputRef = useRef(null)

	const onInputChange = async (e) => {
		console.log('onInputChange called', e.target.value)
		const searchTerm = e.target.value
		if (searchTerm === '') {
			setIsLoading(false)
			setData([])
			return
		}
		setIsLoading(true)
		setIsError(false)
		try {
			const data = await fetchData(searchTerm, skip)
			setData(data.recipes)
		} catch (e) {
			console.error(e)
			setIsError(true)
		} finally {
			setIsLoading(false)
		}
	}

	const handleItemClick = (event) => {
		if (inputRef.current) {
			inputRef.current.value = event.target.textContent
			const event2 = new Event('change')
			inputRef.current.dispatchEvent(event2)
		}
	}

	const debouncedInputChange = debounce(onInputChange, 500)

	useEffect(() => {
		if (touchableAreaRef) {
			touchableAreaRef.current.addEventListener('click', (e) => {
				setIsListVisible(true)
				e.stopPropagation()
			})
		}

		if (outsideTouchableRef) {
			outsideTouchableRef.current.addEventListener('click', (e) => {
				setIsListVisible(false)
			})
		}

		if (inputRef.current) {
			inputRef.current.addEventListener('change', onInputChange)
		}

		return () => {
			debouncedInputChange.cancel()
		}
	}, [])

	return (
		<div
			className='app'
			ref={outsideTouchableRef}
		>
			<div
				className='touchable-area app'
				ref={touchableAreaRef}
			>
				<SearchBar
					onInputChange={debouncedInputChange}
					ref={inputRef}
				/>
				{!isError && (
					<ListItems
						data={data}
						isLoading={isLoading}
						isVisible={isListVisible}
						handleItemClick={handleItemClick}
					/>
				)}
				{isError && <h2>Error Occured</h2>}
			</div>
		</div>
	)
}

export default App
