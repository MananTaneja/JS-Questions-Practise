import { useContext } from 'react';
import { FeatureFlagContext } from './FeatureFlagProvider';

const SampleComponent = () => {
    const features = useContext(FeatureFlagContext)

    console.log(features)


    return (<div>
        <p>Sample Component</p>
    </div>);
}

export default SampleComponent;