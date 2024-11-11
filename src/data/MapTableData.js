export default function mapTableData(posts, users, comments) {
    if(!posts || !comments || !users) return []
    return posts.map((p) => {
        return {
            user: users.find((u) => u.id === p.userId), 
            post: p,
            comments: comments.filter((c) => c.postId === p.id),
        };
    });
}