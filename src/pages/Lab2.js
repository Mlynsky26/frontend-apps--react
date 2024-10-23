import { data } from '../data/module-data' 
import PersonProfile from '../components/PersonProfile'
import { useParams } from 'react-router-dom';
function Lab2() {
    const { id } = useParams();
    if(!id) 
        return <h4>Brak identyfikatora osoby</h4>

    const person = data.find(i => i.id === id)

    if(!person)
        return <h4>Osoba o podanym id nie istnieje</h4>

    return (
        <div className='container'>
             <PersonProfile person={person} />
        </div>
    );
}

export default Lab2;