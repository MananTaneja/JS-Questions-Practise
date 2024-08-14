import { useCallback, useRef, useState } from 'react'
import './App.css'
import InfiniteScrollable from './InfiniteScrollable'

interface IDoc {
  title: string,
  [key: string]: any
}

function App() {

  const [searchQuery, setSearchQuery] = useState<string>("")
  const [data, setData] = useState<Array<IDoc[]>>([])
  const controllerRef = useRef<HTMLDivElement>(null)

  // @ts-ignore
  const getData = useCallback(async (query: string, pageNumber: number): Promise<void> => {

    return new Promise(async (resolve, reject) => {
      try {

        if (controllerRef.current) controllerRef.current.abort()

        const dataPromise = await fetch('https://openlibrary.org/search.json?' + new URLSearchParams({
          q: query,
          page: pageNumber.toString()
        }))

        const data = await dataPromise.json()
        console.log(data)
        // @ts-ignore
        setData((prevData) => [...prevData, ...data.docs])
        resolve()
      } catch (err) {
        reject(err)
      }
    })


  }, [])

  const renderItem = (item: string, index: number): JSX.Element => (
    <li key={index}>
      <p>{item}</p>
    </li>
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
          searchQuery={searchQuery}
        />
      </section>
    </>
  )
}

export default App
