import PersonProfile from '../components/PersonProfile'
import FlexContainer from '../components/FlexContainer';
import { useData } from '../data/UseData';

function Lab3() {
    const items = useData();
    return (
        <FlexContainer data={items} element={PersonProfile}></FlexContainer>
    );
}

export default Lab3;