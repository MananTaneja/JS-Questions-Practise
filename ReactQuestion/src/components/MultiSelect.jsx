import { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ListRenderer from './ListRenderer'
import { useRef } from 'react'

function MultiSelect(props) {
    const containerRef = useRef(null)
    const { searchAble, data, onCloseHandler, type } = props

    const [queryData, setQueryData] = useState(data)
    const [selectedData, setSelectedData] = useState([])
    const [display, setDisplay] = useState(false)

    const searchHandler = (searchQuery) => {
        if (!searchQuery && typeof searchQuery !== 'string') return
        const searchString = searchQuery.toLowerCase()
        const queriedData = data.filter(d => d.toLowerCase().includes(searchString))
        setQueryData(queriedData)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) setDisplay(false)
            else setDisplay(true)
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }

    }, [containerRef])

    return (
        <div ref={containerRef} className="bg-teal-200 rounded-lg">
            {searchAble && (
                <SearchBox
                    data={data}
                    searchHandler={searchHandler}
                />)
            }
            <ListRenderer
                data={queryData}
                typeSelect={type}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
                display={display}
            />
        </div>
    )
}

export default MultiSelect