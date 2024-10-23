import { data } from '../data/module-data' 
import PersonProfile from '../components/PersonProfile'
import FlexContainer from '../components/FlexContainer';

function lab3() {
    return (
        <FlexContainer data={data} element={PersonProfile}></FlexContainer>
    );
}

export default lab3;