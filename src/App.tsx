import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import AttendanceLayout from './layout/attendanceLayout/Index';
import MainLayout from './layout/mainLayout/Index';
import RoomLayout from './layout/roomLayout/Index';
import AccountsPage from './pages/accounts/Index';
import In from './pages/attendance/in/In';
import AttendancePage from './pages/attendance/Index';
import LeavePage from './pages/attendance/leave/LeavePage';
import Out from './pages/attendance/out/Out';
import ComplaintsPage from './pages/home/complaints/ComplaintsPage';
import HomePage from './pages/home/Index';
import StockPage from './pages/home/stock/StockPage';
import StudentPage from './pages/home/student/StudentPage';
import UserPage from './pages/home/users/UserPage';
import MaintenancePage from './pages/maintenance/Index';
import AssignedPage from './pages/rooms/Assigned/AssignedPage';
import FurniturePage from './pages/rooms/Furniture/FurniturePage';
import HostelsPage from './pages/rooms/hostels/HostelsPage';
import RoomsPage from './pages/rooms/Index';
import RoomPage from './pages/rooms/rooms/RoomPage';

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
        { path: '/assigned', element: <AssignedPage /> },
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
        { path: 'room', element: <RoomPage /> },
      ],
    },
    // AttendancLayout
    {
      path: '/attendance',
      element: <AttendanceLayout />,
      children: [
        {
          path: '/attendance',
          element: <AttendancePage />
        },
        {
          path: 'in',
          element: <In />
        },
        {
          path: 'out',
          element: <Out />
        },
        {
          path: 'leave',
          element: <LeavePage />
        }
      ]
    }
    // maintenanceLayout
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
