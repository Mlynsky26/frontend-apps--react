import RatingBar from "./RatingBar";
import { Link } from "react-router-dom";
import { useDispatch } from "../data/UseData";

function PersonProfile({ id, name, eyeColor, birthDate, rating}) {
    const dispatch = useDispatch();
    
    const onRate = () =>  {
        dispatch({
            type: "rate",
            id: id,
            rating: (rating + 1) % 11
        });
    }
    
    const handleDelete = () => {
        dispatch({
            type: "delete",
            id: id
        });
    }

    return (
        <div>
            <div className="border p-2">
                <h3>{name} ({id})</h3>
                <p>Kolor oczu: {eyeColor}</p>
                <p>Data urodzenia: {birthDate}</p>
                <RatingBar rating={rating}></RatingBar>
                <div className="d-flex flex-wrap justify-content-end gap-2">
                    <Link to={`/lab4/edit/${id}`} className="btn btn-primary">Edit</Link>
                    <button className="btn btn-danger" onClick={() => handleDelete()}>Delete</button>
                    <button className="btn btn-outline-warning" onClick={() => onRate()}>Rate</button>
                </div>
            </div>
        </div>
    );
}

export default PersonProfile;