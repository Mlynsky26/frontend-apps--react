import { useContext } from 'react';
import PersonProfile from '../components/PersonProfile'
import { useParams } from 'react-router-dom';
import AppContext from '../data/AppContext';
function Lab2() {
    const context = useContext(AppContext);
    const items = context.items;
    const { id } = useParams();
    if(!id) 
        return <h4>Brak identyfikatora osoby</h4>

    const person = items.find(i => i.id === parseInt(id))

    if(!person)
        return <h4>Osoba o podanym id nie istnieje</h4>

    return (
        <div className='container'>
             <PersonProfile {...person} />
        </div>
    );
}

export default Lab2;