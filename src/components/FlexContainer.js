import { Col, Container, Row } from "react-bootstrap";
import AppReducer from '../data/AppReducer';
import { useReducer } from 'react';

function FlexContainer({element: Element, data}) {
    const [items, dispatch] = useReducer(AppReducer, data);

    // const onRate = (id) => {
    //     dispatch({
    //         type: "rate",
    //         id: id
    //     });
    // }

    const onDelete = (id) => {
        dispatch({
            type: "delete",
            id: id
        });
    }

    return (  
        <Container>
            <Row className="g-3">
                {items.map(element => (
                    <Col key={element.id} xs={12} lg={6} xl={4}>
                        <Element {...element} onDelete={onDelete} ></Element>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default FlexContainer;