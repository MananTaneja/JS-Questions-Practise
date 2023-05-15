import { useCallback, useState } from 'react'
import './App.css'
import InfiniteScrollable from './InfiniteScrollable'

function App() {

  const [searchQuery, setSearchQuery] = useState<string>("")
  const [data, setData] = useState<Array<any>>([])

  // @ts-ignore
  const getData = useCallback(async (query, pageNumber) => {
    const dataPromise = await fetch('https://openlibrary.org/search.json' + new URLSearchParams({
      q: query,
      page: pageNumber
    }))

    const newData = await dataPromise.json()

    // @ts-ignore
    setData((prevData) => [...prevData, ...newData.docs])
  }, [])

  const renderItem = (item: string): JSX.Element => (
    <div>
      <p>{item}</p>
    </div>
  )

  return (
    <>
      <section id='search'>
        <input type="text" placeholder='Search' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      </section>
      <section id="horizontal-scroll"> 
        <InfiniteScrollable
          getData={getData}  
          listData={data}
          renderItem={renderItem}
        />
      </section>
    </>
  )
}

export default App
