import { useParams } from 'react-router-dom';
import useFetch from '../data/UseFetch';
import { useEffect, useState } from 'react';
function Lab5User() {
    
    const { id } = useParams();

    const [user] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (user)
            setLoading(false)
        
    }, [user])
    
    if (!id)
        return <h4>Brak identyfikatora osoby</h4>

    if (loading)
        return (
            <div className="text-center">
                Loading...
            </div>
        )

    if (!user || Object.keys(user).length === 0)
        return <h4>Osoba o podanym id nie istnieje</h4>

    return (
        <div className='container'>
            <h1>{user.name} ({user.id})</h1>
            <ul>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
                <li>Phone: {user.phone}</li>
                <li>Website: {user.website}</li>
                <li>
                    Company:
                    <ul>
                        <li>Name: {user.company.name}</li>
                        <li>Catch phrase: {user.company.catchPhrase}</li>
                        <li>Bs: {user.company.bs}</li>
                    </ul>
                </li>
                <li>
                    Address:
                    <ul>
                        <li>City: {user.address.city}</li>
                        <li>Street: {user.address.street}</li>
                        <li>Suite: {user.address.suite}</li>
                        <li>Zipcode: {user.address.zipcode}</li>
                        <li>
                            Geo:
                            <ul>
                                <li>Latitude: {user.address.geo.lat}</li>
                                <li>Longitude: {user.address.geo.lng}</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Lab5User;