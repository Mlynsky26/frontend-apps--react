import PersonProfile from '../components/PersonProfile'
import { useData } from '../data/UseData';
function Lab1() {
    const items = useData();
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