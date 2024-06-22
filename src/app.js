import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from './components/Body';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Shimmer from './components/schimmerUI';
import Login from './components/Login'
import userContext from './utils/userContext';

const Instamart = lazy(() => import("./components/InstaMart"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
    const [user1,setUser1] = useState({
        name : "Akshay Saini",
        email :"support@namstedev.com"
    })

    return (
        <>
        <userContext.Provider value= {{user1:user1,setUser1:setUser1}}>
            <Header />
            <Outlet />
            <Footer />
        </userContext.Provider>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body user={{ name: "Namaste React", email: "support@namstedev.com" }} />,
            },
            {
                path: '/about',
                element: (<Suspense fallback={<h1>Loading......</h1>}>
                    <About />
                </Suspense>),
                children: [{
                    path: "profile",
                    element: <Profile />,
                }]
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },
            {
                path: '/instamart',
                element: (<Suspense fallback={<Shimmer />}>
                    <Instamart />
                </Suspense>),
            },
        ],
    },
    {
        path: "login",
        element: <Login />,
        errorElement: <Error />,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
