import { Col, Container, Row } from "react-bootstrap";

function FlexContainer({element: Element, data}) {
    return (  
        <Container>
            <Row className="g-3">
                {data.map(element => (
                    <Col key={element.id} xs={12} lg={6} xl={4}>
                        <Element {...element}></Element>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default FlexContainer;