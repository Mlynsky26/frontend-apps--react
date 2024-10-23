export default function AppReducer(state, action){
    switch(action.type){
        case "edit":
            return state;
        case "rate":{
            return state;
        }
        case "delete": {
            return state.filter(item => item.id !== action.id);       
        }
    }
}