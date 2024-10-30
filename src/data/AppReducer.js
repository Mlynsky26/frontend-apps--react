export default function AppReducer(state, action){
    switch(action.type){
        case "edit":
            const item = state.find(item => item.id === action.item.id)
            if(item) {
                item.name = action.item.name
                item.rating = action.item.rating
                item.eyeColor = action.item.eyeColor
                item.birthDate = action.item.birthDate
            }
            return [...state]
        case "rate":{
            const item = state.find(item => item.id === action.id)
            if(item){
                item.rating = action.rating
            }
            return [...state]
        }
        case "delete": {
            return state.filter(item => item.id !== action.id)   
        }
        case "add": {
            if(!state.find(item => item.id === action.item.id))
                state.push(action.item)
            return [...state]      
        }
        default: {
            return [...state]
        }
    }
}