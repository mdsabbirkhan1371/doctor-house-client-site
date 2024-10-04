import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Home/Home/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
    ],
  },
]);
