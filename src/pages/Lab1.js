import { data } from '../data/module-data' 
import PersonProfile from '../components/PersonProfile'
function Lab1() {
    return (
        <div className='container'>
            <h1>Osoby</h1>
            <div className='row row-cols-3 g-3'>
                {data.map((person, index) => <PersonProfile key={person.id} {...person} />)}
            </div>
        </div>
    );
}

export default Lab1;