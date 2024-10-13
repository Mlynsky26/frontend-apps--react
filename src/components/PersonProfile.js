function PersonProfile({person}) {
    return (  
        <div className="col-4">
            <div className="border p-2">
            <h3>{person.name} ({person.id})</h3>
            <p>Kolor oczu: {person.eyeColor}</p>
            <p>Data urodzenia: {person.birthDate}</p>
            </div>
        </div>
    );
}

export default PersonProfile;