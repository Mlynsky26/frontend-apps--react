import { Container, Table } from "react-bootstrap";
import TableSorter from "../components/TableSorter";
import useFetch from "../data/UseFetch";
import PostTableRow from "../components/PostTableRow";
import TableReducer from "../data/TableReducer";
import { useEffect, useReducer, useState } from "react";
import mapTableData from "../data/MapTableData";

function Lab5() {
    const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
    const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");
    const [tableData, dispatch] = useReducer(TableReducer, []);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if(posts && users && comments)
            setLoading(false)
        
        dispatch({
            type: 'reset',
            data: mapTableData(posts, users, comments)
        })

    }, [posts, users, comments])
    
    const handleSort = (key, type) => {
        if(type === "RESET") {
            dispatch({
                type: 'reset',
                data: mapTableData(posts, users, comments)
            })
            return
        }

        dispatch({
            type: 'sort',
            sortType: type,
            sortKey: key
        })
    }
    if(loading)
        return(
            <div className="text-center">
                Loading...
            </div>
        )

    return (
        <Container>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th><TableSorter name="User" sortKey="USER" onAction={handleSort} /></th>
                        <th><TableSorter name="Post" sortKey="POST" onAction={handleSort} /></th>
                        <th><TableSorter name="Comments count" sortKey="COMMENTS" onAction={handleSort} /></th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((data, i) => <PostTableRow key={i} item={data}></PostTableRow>)}
                </tbody>
            </Table>

        </Container>
    );
}

export default Lab5;