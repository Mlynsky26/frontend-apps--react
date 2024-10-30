import { createContext } from "react";

const AppContext = createContext({
    items: [],
    dispatch: null,
    maxId: 0,
    setMaxId: (id) => {}
});
export default AppContext;