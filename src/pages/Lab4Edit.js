import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Form as BsForm } from "react-bootstrap";
import Lab3 from './Lab3';
import { useData, useDispatch } from '../data/UseData';

const colors = [
    'blue',
    'brown',
    'green',
    'gray',
    'yellow'
]

function Lab4Edit() {
    const dispatch = useDispatch()
    const items = useData();
    const { id } = useParams();
    const parsedId = parseInt(id)
    if (!parsedId)
        return <h4>Brak identyfikatora osoby</h4>

    const person = items.find(i => i.id === parsedId)

    if (!person)
        return <h4>Osoba o podanym id nie istnieje</h4>

    return (
        <div className='container'>
            <Formik
            key={id}
                initialValues={{ name: person.name, eyeColor: person.eyeColor, rating: person.rating, birthDate: person.birthDate.split('/').reverse().join('-') }}
                validate={values => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    } else if (values.name.length < 3) {
                        errors.name = 'Name too short';
                    }


                    if (!values.eyeColor) {
                        errors.eyeColor = 'Name too short';
                    } else if (!colors.includes(values.eyeColor)) {
                        errors.eyeColor = 'Selected color is not valid'
                    }

                    if (values.rating === "") {
                        errors.rating = 'Required';
                    } else if (values.rating < 0 || values.rating > 10) {
                        errors.rating = 'Invalid value';
                    }

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    const item = {
                        id: parsedId,
                        name: values.name,
                        eyeColor: values.eyeColor,
                        birthDate: values.birthDate.split('-').reverse().join('/'),
                        rating: parseInt(values.rating),
                    }

                    dispatch({
                        type: "edit",
                        item: item
                    });
                    setSubmitting(false);
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <BsForm.Label htmlFor="name">Name</BsForm.Label>
                        <Field type="text" name="name" minLength={3} className="form-control" />
                        <ErrorMessage name="name" component="div" />

                        <BsForm.Label htmlFor="eyeColor">Eye Color</BsForm.Label>
                        <Field as="select" name="eyeColor" className="form-control">
                            {colors.map((color, i) => <option key={i} value={color}>{color}</option>)}
                        </Field>
                        <ErrorMessage name="eyeColor" component="div" />

                        <BsForm.Label htmlFor="rating">Rating </BsForm.Label>
                        <Field type="number" name="rating" min={0} max={10} step={1} className="form-control" />
                        <ErrorMessage name="rating" component="div" />

                        <BsForm.Label htmlFor="birthDate">Birth date </BsForm.Label>
                        <Field type="date" name="birthDate" max="2009-12-31" className="form-control" />
                        <ErrorMessage name="birthDate" component="div" />

                        <button type="submit" className='btn btn-primary' disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>

            <Lab3></Lab3>
        </div>
    );
}

export default Lab4Edit;