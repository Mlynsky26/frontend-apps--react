import { useContext } from 'react';
import PersonProfile from '../components/PersonProfile'
import AppContext from '../data/AppContext';
function Lab1() {
    const context = useContext(AppContext);
    const items = context.items;
    return (
        <div className='container'>
            <h1>Osoby</h1>
            <div className='row row-cols-3 g-3'>
                {items.map((person, index) => <PersonProfile key={person.id} {...person} />)}
            </div>
        </div>
    );
}

export default Lab1;