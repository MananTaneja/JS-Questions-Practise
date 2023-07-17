import debounce from '../utils/debounce'

function SearchBox(props) {
    const { searchHandler } = props

    return (
        <div id="search-box" className='h-10 flex gap-2 items-center p-2'>
            <input type="text" id='search-input' placeholder='Search Items' className='bg-teal-200' onChange={(e) => debounce(searchHandler(e.target.value), 5000)} />
        </div>
    )
}

export default SearchBox