import {data} from "./module-data";
import AppReducer from './AppReducer';
import { useReducer, useState } from "react";
import AppContext from "./AppContext";

function AppProvider({ children }) {
  const [state, appDispatch] = useReducer(AppReducer, data);
  const [maxId, setMaxId] = useState(Math.max(...data.map(item => item.id)) | 0)
  return (
    <AppContext.Provider value={{ items: state, dispatch: appDispatch, maxId, setMaxId  }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;