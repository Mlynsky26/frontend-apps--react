import { useState } from "react";
import RatingBar from "./RatingBar";

function PersonProfile({id, name, eyeColor, birthDate, rating, onDelete}) {
    const [rate, setRating] = useState(rating || 0)
    const onRate = () =>  setRating(prev => (prev + 1) % 11)
    const onEdit = () => {}
    const handleDelete = () => {
        onDelete(id)
    }

    return (  
        <div>
            <div className="border p-2">
                <h3>{name} ({id})</h3>
                <p>Kolor oczu: {eyeColor}</p>
                <p>Data urodzenia: {birthDate}</p>
                <RatingBar rating={rate}></RatingBar>
                <div className="d-flex flex-wrap justify-content-end gap-2">
                    <button className="btn btn-primary" onClick={() => onEdit()}>Edit</button>
                    <button className="btn btn-danger" onClick={() => handleDelete()}>Delete</button>
                    <button className="btn btn-outline-warning"onClick={() => onRate()}>Rate</button>
                </div>
            </div>
        </div>
    );
}

export default PersonProfile;