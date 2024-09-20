import React from 'react';

const defaultFeatureFlagConfig = {
	"feature1": false,
	"feature2": true,
	"feature3": false,
}


export type featureLabels = keyof typeof defaultFeatureFlagConfig

export const FeatureFlagContext = React.createContext(defaultFeatureFlagConfig)

const FeatureFlagProvider = ({ children }: { children: React.ReactNode }) => {

	// const { data: featureflagConfig } = useSWR('https://api.uber.com/feature-flags')

	return (
		<FeatureFlagContext.Provider value={defaultFeatureFlagConfig}>
			{children}
		</FeatureFlagContext.Provider>
	)
}

export default FeatureFlagProvider