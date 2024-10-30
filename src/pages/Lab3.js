import PersonProfile from '../components/PersonProfile'
import FlexContainer from '../components/FlexContainer';
import { useContext } from 'react';
import AppContext from '../data/AppContext';

function Lab3() {
    const context = useContext(AppContext);
    const items = context.items;
    return (
        <FlexContainer data={items} element={PersonProfile}></FlexContainer>
    );
}

export default Lab3;