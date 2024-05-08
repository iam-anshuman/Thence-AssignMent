import './App.css'
import HomePage from './Components/HomePage';
import GetProjects from './Components/GetProjects';
import FormSubmitted from './Components/FormSubmitted';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  },
  {
    path: '/get-projects',
    element: <GetProjects/>
  },
  {
    path: '/form-submitted',
    element: <FormSubmitted/>
  }
]);

function App({children}) {


  return (
    <>
      <RouterProvider router={router}>
        {children}
      </RouterProvider>
    </>
  )
}

export default App
