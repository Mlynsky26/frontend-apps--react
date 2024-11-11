import PersonProfile from '../components/PersonProfile'
import { useParams } from 'react-router-dom';
import { useData } from '../data/UseData';
function Lab2() {
    const items = useData();
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