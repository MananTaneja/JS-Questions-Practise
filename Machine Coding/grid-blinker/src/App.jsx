import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<Home
					rows={3}
					cols={3}
				/>
			),
		},
	])

	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
