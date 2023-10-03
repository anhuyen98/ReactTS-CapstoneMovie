import { RouteObject } from 'react-router-dom'
import { PATH } from 'constant'
import { AuthLayout, MainLayout } from 'components'
import { Detail, Home, Login, Profile, Register, Ticketroom } from "pages"

export const router: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: PATH.login,
                element: <Login />
            },
            {
                path: PATH.register,
                element: <Register />

            },
        ],
    },
    {
        element: <MainLayout />,
        children: [
            {
                path: PATH.detail,
                element: <Detail />
            },
            {
                path: PATH.ticketroom,
                element: <Ticketroom />
            },
            {
                path: PATH.profile,
                element: <Profile />
            },
        ],
    },
]
