import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Home/Home/Home';
import SignUp from '../../Component/SignUp/SignUp';
import Login from '../../Component/Login/Login';
import About from '../../Component/About/About';

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
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
    ],
  },
]);
