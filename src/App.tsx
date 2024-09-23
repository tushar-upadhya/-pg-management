import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import MainLayout from './layout/mainLayout/Index';
import RoomLayout from './layout/roomLayout/Index';
import AccountsPage from './pages/accounts/Index';
import AttendancePage from './pages/attendance/Index';
import ComplaintsPage from './pages/home/complaints/ComplaintsPage';
import HomePage from './pages/home/Index';
import MealPage from './pages/home/meals/MealPage';
import StockPage from './pages/home/stock/StockPage';
import StudentPage from './pages/home/student/StudentPage';
import UserPage from './pages/home/users/UserPage';
import MaintenancePage from './pages/maintenance/Index';
import AssignedPage from './pages/rooms/Assigned/AssignedPage';
import FurniturePage from './pages/rooms/Furniture/FurniturePage';
import HostelsPage from './pages/rooms/hostels/HostelsPage';
import RoomsPage from './pages/rooms/Index';

const App = () => {
  const router = createBrowserRouter([
    // mainLayout
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/attendance', element: <AttendancePage /> },
        { path: '/account', element: <AccountsPage /> },
        { path: '/maintenance', element: <MaintenancePage /> },
        { path: '/students', element: <StudentPage /> },
        { path: '/complaints', element: <ComplaintsPage /> },
        { path: '/stock', element: <StockPage /> },
        { path: '/meal', element: <MealPage /> },
        { path: '/users', element: <UserPage /> }
      ],
    },
    // roomLayout
    {
      path: '/rooms',
      element: <RoomLayout />,
      children: [
        { path: '/rooms', element: <RoomsPage /> },
        { path: 'hotels', element: <HostelsPage /> },
        { path: 'assigned', element: <AssignedPage /> },
        { path: 'furniture', element: <FurniturePage /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
