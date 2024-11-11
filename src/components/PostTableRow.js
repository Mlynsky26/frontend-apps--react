import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";

function PostTableRow({item}) {
    return ( 
        <tr>
            <td><Link to={`/lab5/users/${item.user.id}`}>{item.user.username}</Link></td>
            <td>
                <Accordion flush>
                    <Accordion.Item eventKey={item.post.id}>
                        <Accordion.Header>{item.post.title}</Accordion.Header>
                        <Accordion.Body>
                            {item.post.body}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </td>
            <td><Link to={`/lab5/comments/${item.post.id}`}>{item.comments.length}</Link></td>
        </tr>
     );
}

export default PostTableRow;