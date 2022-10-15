import './App.css';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import RegisterReactBootstrap from "./components/RegisterReactBootstrap";
import Main from './layouts/Main';
import LoginBootStrap from './components/LoginBootStrap';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/register',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/login',
        element: <LoginBootStrap></LoginBootStrap>
      },
      
    ]
  }
])

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
