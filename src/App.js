import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import Lab3 from './pages/Lab3';
import Lab4Add from './pages/Lab4Add';
import Lab4Edit from './pages/Lab4Edit';
import NotFound from './pages/NotFound';
import './App.css';
import AppProvider from './data/AppProvider';
import Lab5 from './pages/Lab5';
import Lab5User from './pages/Lab5User';
import Lab5Comments from './pages/Lab5Comments';


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
    label: "Lab5",
    url: "/lab5",
    urlPattern: "/lab5",
    element: <Lab5 />
  },
  {
    id: 8,
    label: "Lab5",
    url: "/lab5/users/1",
    urlPattern: "/lab5/users/:id",
    element: <Lab5User />,
    disableInMenu: true
  },
  {
    id: 9,
    label: "Lab5",
    url: "/lab5/comments/1",
    urlPattern: "/lab5/comments/:id",
    element: <Lab5Comments />,
    disableInMenu: true
  },
  {
    id: 100,
    label: "Not Found",
    url: "/*",
    urlPattern: "*",
    element: <NotFound />,
    disableInMenu: true
  }
];

function App() {
  return (
    <AppProvider>
      <RootLayout items={menuItems}>
        <Routes>
          {
            menuItems.map(item => (
              <Route key={item.id} path={item.urlPattern} element={item.element} />
            ))
          }
        </Routes>
      </RootLayout>
    </AppProvider>
  );
}

export default App;