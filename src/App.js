import React, { useReducer, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import { data } from './data/module-data'
import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import Lab3 from './pages/Lab3';
import Lab4Add from './pages/Lab4Add';
import Lab4Edit from './pages/Lab4Edit';
import NotFound from './pages/NotFound';
import './App.css';
import AppReducer from './data/AppReducer';
import AppContext from './data/AppContext';


const menuItems = [
  {
    id: 1,
    label: "Home",
    url: "/",
    urlPattern: "/",
    element: <Home />
  },
  {
    id: 2,
    label: "Lab1",
    url: "/lab1",
    urlPattern: "/lab1",
    element: <Lab1 />
  },
  {
    id: 3,
    label: "Lab2",
    url: "/lab2/1",
    urlPattern: "/lab2/:id",
    element: <Lab2 />
  },
  {
    id: 4,
    label: "Lab3",
    url: "/lab3",
    urlPattern: "/lab3",
    element: <Lab3 />
  },
  {
    id: 5,
    label: "Lab4 Add",
    url: "/lab4/add",
    urlPattern: "/lab4/add",
    element: <Lab4Add />
  },
  {
    id: 6,
    label: "Lab4 Edit",
    url: "/lab4/edit/1",
    urlPattern: "/lab4/edit/:id",
    element: <Lab4Edit />
  },
  {
    id: 7,
    label: "Not Found",
    url: "/*",
    urlPattern: "*",
    element: <NotFound />,
    disableInMenu: true
  }
];

function App() {
  const [items, appDispatch] = useReducer(AppReducer, [...data]);

  const [maxId, setMaxId] = useState(Math.max(...data.map(item => item.id)) | 0)

  return (
    <AppContext.Provider value={{ items: items, dispatch: appDispatch, maxId, setMaxId }}>
      <RootLayout items={menuItems}>
        <Routes>
          {
            menuItems.map(item => (
              <Route key={item.id} path={item.urlPattern} element={item.element} />
            ))
          }
        </Routes>
      </RootLayout>
    </AppContext.Provider>

  );
}

export default App;