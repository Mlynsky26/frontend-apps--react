import { Dropdown } from "react-bootstrap";

function TableSorter({ name, sortKey, onAction }) {
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success">
                {name}
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => onAction(sortKey, 'ASCENDING')}>Ascending Order</Dropdown.Item>
                <Dropdown.Item onClick={() => onAction(sortKey, 'DESCENDING')}>Descending Order</Dropdown.Item>
                <Dropdown.Item onClick={() => onAction(sortKey, 'RESET')}>Natural</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default TableSorter;