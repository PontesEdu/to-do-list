import { createBrowserRouter } from 'react-router'
import { AppLayout } from './_layout/app-layout'
import { TaskList } from './app/TaskList'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    // errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <TaskList />,
      },
    ],
  },
])
