import { Button, Container, Form, FormControl } from "react-bootstrap";
import { useState } from "react";
import Lab3 from './Lab3';
import { useDispatch, useMaxId, useSetMaxId } from '../data/UseData';

const nameField = "name";
const eyeColorField = "eyeColor";
const birthDateField = "birthDate";
const ratingField = "rating";

const colors = [
    'blue',
    'brown',
    'green',
    'gray',
    'yellow'
]

function Lab4Add() {
    const dispatch = useDispatch();
    const maxId = useMaxId();
    const setMaxId = useSetMaxId();

    const [errors, setErrors] = useState([]);        // stan kominikatów błędów
    const [isSendig, setSending] = useState(false);  // stan sygnalizujący wysyłanie

    const onSubmitFunction = async (e) => {
        e.preventDefault();                            //blokada wysyłania żądania  
        const data = new FormData(e.target);
        if (!colors.includes(data.get(eyeColorField))) {
            setErrors([...errors, "Selected color is not valid"])
            return;
        }
        setSending(true);
        setErrors([])

        const newId = maxId + 1
        const item = {
            id: newId,
            name: data.get(nameField),
            eyeColor: data.get(eyeColorField),
            birthDate: data.get(birthDateField).split('-').reverse().join('/'),
            rating: parseInt(data.get(ratingField)),
        }

        dispatch({
            type: "add",
            item : item
        });

        setMaxId(newId)

        for (let key of data.keys()) {                               //reset formularza
            e.target[key].value = "";
        }
        setSending(false);
    };

    return (
        <Container>
            <h1>Register</h1>

            <div className="text-danger">
                {errors.map((e, i) => <p key={i}>{e}</p>)}
            </div>

            <Form className="text-primary mb-3" onSubmit={onSubmitFunction}>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="name">Name</Form.Label>
                    <FormControl
                        required
                        id={nameField}
                        type="text"
                        name={nameField}
                        placeholder="Enter name"
                        minLength={3}
                    />
                    <Form.Text className="text-muted">Enter name with minimum length of 3</Form.Text>

                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label htmlFor={eyeColorField}>Eye Color</Form.Label>
                    <Form.Select 
                        required
                        id={eyeColorField}
                        name={eyeColorField}
                        placeholder="Select eye color">
                            <option value="">Select color</option>
                        {colors.map((color, i) => <option key={i} value={color}>{color}</option>)}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="rating">Rating </Form.Label>
                    <FormControl
                        required
                        id={ratingField}
                        type="number"
                        name={ratingField}
                        min={0}
                        max={10}
                        step={1}
                        placeholder="Enter rating"
                    />
                    <Form.Text className="text-muted">
                       Enter rating between 0 and 10
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="birthDate">Birth date </Form.Label>
                    <FormControl
                        required
                        id={birthDateField}
                        type="date"
                        name={birthDateField}
                        max="2009-12-31"
                        placeholder="Enter date"
                    />
                    <Form.Text className="text-muted">
                       Enter date to year 2010
                    </Form.Text>
                </Form.Group>

                <div className="d-grid">
                    <Button disabled={isSendig} type="submit" variant="outline-primary" size="lg">
                        Submit
                    </Button>
                </div>

            </Form>
            <Lab3></Lab3>
        </Container>
    );
}

export default Lab4Add;