import { RouteObject } from "react-router-dom";
import { PATH } from "../constant/config";
import { AuthLayout, MainLayout } from 'components';
import { Account, Detail, Home, Login, Profile, Register, TestHome, Ticketroom } from "pages";

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
            {
                path: PATH.testhome,
                element: <TestHome />
            },
            {
                path: PATH.account,
                element: <Account />
            }
        ],
    },
]