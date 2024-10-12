import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Home/Home/Home';
import SignUp from '../../Component/SignUp/SignUp';
import Login from '../../Component/Login/Login';
import About from '../../Component/About/About';
import Appointment from '../../Component/Appointment/Appointment';
import DoctorProfile from '../../Home/Doctors/DoctorProfile';
import AvailableSlots from '../../Share/AvailableSlots/AvailableSlots';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import MyBookings from '../../Pages/MyBookings/MyBookings';
import DashBoard from '../../DashBoard/DashBoard';
import AdminHome from '../../Pages/DashboardPages/AdminHome';
import AddDoctor from '../../Pages/DashboardPages/AddDoctor';
import ManageDoctor from '../../Pages/DashboardPages/ManageDoctor';
import AllUsers from '../../Pages/DashboardPages/AllUsers';
import AdminRoute from '../AdminRoute/AdminRoute';

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
      {
        path: '/appointment',
        element: <Appointment></Appointment>,
      },
      {
        path: '/myBooking',
        element: <MyBookings></MyBookings>,
      },
      {
        path: '/doctorProfile/:id',
        element: <DoctorProfile></DoctorProfile>,
        loader: ({ params }) =>
          fetch(
            `https://doctor-house-server-site.vercel.app/doctors/${params.id}`
          ),
      },
      {
        path: '/services/availableSlots/:id',
        element: (
          <PrivateRoute>
            <AvailableSlots></AvailableSlots>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://doctor-house-server-site.vercel.app/services/availableSlots/${params.id}`
          ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <AdminRoute>
        <DashBoard></DashBoard>
      </AdminRoute>
    ),
    children: [
      {
        path: 'addDoctor',
        element: <AddDoctor></AddDoctor>,
      },
      {
        path: 'manageDoctor',
        element: <ManageDoctor></ManageDoctor>,
      },
      {
        path: 'adminHome',
        element: <AdminHome></AdminHome>,
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
