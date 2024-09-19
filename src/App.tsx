import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';


import MainLayout from './layout/mainLayout/Index';
import RoomLayout from './layout/roomLayout/Index';
import AccountsPage from './pages/home/accounts/AccountsPage';
import AttendancePage from './pages/home/attendance/AttendancePage';
import HomePage from './pages/home/Index';
import MaintenancePage from './pages/home/maintenance/MaintenancePage';
import AssignedPage from './pages/rooms/Assigned/AssignedPage';
import FurniturePage from './pages/rooms/Furniture/FurniturePage';
import HotelsPage from './pages/rooms/Hotel/HotelsPage';
import RoomsPage from './pages/rooms/Index';

const App = () => {
  const router = createBrowserRouter([
    // mainLayout
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/rooms', element: <RoomsPage /> },
        { path: '/attendance', element: <AttendancePage /> },
        { path: '/account', element: <AccountsPage /> },
        { path: '/maintenance', element: <MaintenancePage /> },
      ],
    },
    // roomLayout
    {
      path: '/rooms/',
      element: <RoomLayout />,
      children: [
        { path: 'hotels', element: <RoomsPage /> },
        { path: 'hotels', element: <HotelsPage /> },
        { path: 'assigned', element: <AssignedPage /> },
        { path: 'furniture', element: <FurniturePage /> },
      ],
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
