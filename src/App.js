import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import Lab1 from './pages/Lab1';
import Lab2 from './pages/Lab2';
import NotFound from './pages/NotFound';
import './App.css';

const menuItems = [
  {
    id: 1,
    label: "Home",
    url: "/",
    urlPattern: "/",
    element: <Home/>
  },
  {
    id: 2,
    label: "Lab1",
    url: "/lab1",
    urlPattern: "/lab1",
    element: <Lab1/>
  },
  {
    id: 3,
    label: "Lab2",
    url: "/lab2/1",
    urlPattern: "/lab2/:id",
    element: <Lab2/>
  },
  {
    id: 4,
    label: "Not Found",
    url: "/*",
    urlPattern: "*",
    element: <NotFound/>,
    disableInMenu: true
  }
];

function App() {
  return (
    <RootLayout items={menuItems}>
      <Routes>
    {
      menuItems.map(item => (
        <Route key={item.id} path={item.urlPattern} element={item.element}/>
      ))
    }
    </Routes>
    </RootLayout>
  );
}

export default App;