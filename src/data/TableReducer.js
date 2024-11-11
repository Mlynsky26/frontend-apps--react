export default function TableReducer(state, action) {
    const sorts = {
        'USER': (a, b, dir) => {
            return ((a.user.username > b.user.username) * 2 - 0.5) * dir
        },
        'POST': (a, b, dir) => {
            return ((a.post.title > b.post.title) * 2 - 0.5) * dir
        },
        'COMMENTS': (a, b, dir) => {
            return (a.comments.length - b.comments.length) * dir
        }
    }
    switch (action.type) {
        case "sort":
            const dir = action.sortType === 'DESCENDING' ? -1 : 1
            return[...state].sort(((a, b) => {
                return sorts[action.sortKey](a, b, dir)
            }))
        case "reset": {
            return [...action.data]
        }
        default: {
            return [...state]
        }
    }
}