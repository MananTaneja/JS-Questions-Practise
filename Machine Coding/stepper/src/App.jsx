import { useState } from 'react'
import { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
	])

	return (
		<>
			<RouterProvider router={router} />
			{data && data.length > 0 && <p>{data[0].name}</p>}
		</>
	)
}

export default App
