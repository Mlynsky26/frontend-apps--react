import './App.css';
import { data } from './module-data'
import PersonProfile from './components/PersonProfile';


function App() {
  return (
    <div className='container'>
      <h1>Osoby</h1>
      <div className='row g-3'>
        {data.map((person, index) => <PersonProfile key={person.id} person={person} />)}
      </div>
    </div>
  );
}

export default App;
