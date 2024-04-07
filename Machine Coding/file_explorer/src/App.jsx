import { useState } from 'react'
import { useEffect } from 'react'
import Explorer from './components/Explorer'
// import {
//   createBrowserRouter,
//   RouterProvider
// } from "react-router-dom"
// import Home from './pages/Home'

function App() {

  const [data, setData] = useState({})

  // Data Fetching
  useEffect(() => {
    fetch('http://localhost:3000/folderData').then(res => res.json()).then(res => setData(res))
  }, [])



  return (
    <>
      <Explorer folderStructure={data} />
    </>
  )
}

export default App
