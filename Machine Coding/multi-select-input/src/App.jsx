import { useState } from 'react'
import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

function App() {
	const [data, setData] = useState([])

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
	])

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
