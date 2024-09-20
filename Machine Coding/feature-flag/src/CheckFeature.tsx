import { ReactNode, useContext } from 'react';
import { FeatureFlagContext, featureLabels } from './FeatureFlagProvider';

const CheckFeature = ({ featureName, children, condition = true }: { featureName: featureLabels, children: ReactNode, condition: boolean }) => {

    const features = useContext(FeatureFlagContext);

    if (features[featureName] && features[featureName] === condition) {
        return children
    }

    return null
}

export default CheckFeature;