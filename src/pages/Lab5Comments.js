import { useParams } from 'react-router-dom';
import useFetch from '../data/UseFetch';
import { useEffect, useState } from 'react';
function Lab5Comments() {
    
    const { id } = useParams();

    const [post] = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const [comments] = useFetch(`https://jsonplaceholder.typicode.com/users/${id}/comments`);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (post && comments)
            setLoading(false)
        
    }, [post, comments])
    
    if (!id)
        return <h4>Brak identyfikatora posta</h4>

    if (loading)
        return (
            <div className="text-center">
                Loading...
            </div>
        )

    if (!post || Object.keys(post).length === 0)
        return <h4>Post o podanym id nie istnieje</h4>

    return (
        <div className='container'>
            <h1>{post.title} ({post.id})</h1>
            <div className='mb-3'>{post.body}</div>

            {comments.map(comment => <div className='mb-2 border p-3'>
                <h3><span className='text-primary me-4'>{comment.email}</span>{comment.name}</h3>
                <div>{comment.body}</div>
            </div>

            )}
            
        </div>
    );
}

export default Lab5Comments;