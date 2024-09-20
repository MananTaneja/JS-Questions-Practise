import './App.css'
import FeatureFlagProvider from './FeatureFlagProvider'
import SampleComponent from './SampleComponent'

function App() {

	return (
		<FeatureFlagProvider>
			<div>
				<p>Random</p>
			</div>
			<SampleComponent />
		</FeatureFlagProvider>
	)
}

export default App
