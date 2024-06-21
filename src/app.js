import React , { lazy , Suspense } from 'react';
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from './components/Body';
import Footer  from './components/Footer';
import Contact from './components/Contact';
import Error from './components/Error';
import {createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Shimmer from './components/schimmerUI';
import Login from './components/Login'

/**
 * All are same
 * Chunking
 * code Splitting
 * Dynamic Bundling
 * Dynamic Loading
 * Lazy Loading
 * On Demand Loading
 * Dynamic Import
 * 
 */

const Instamart  = lazy(()=> import("./components/InstaMart"));
//upon on demand loading -> upon render -> suspend Loading
//React tries to suspend it 

const About  = lazy(()=> import("./components/About"));


const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement : <Error />,
        children :[
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: (<Suspense fallback= {<h1>Loading......</h1>}>
                            <About />
                            </Suspense>),
                children :[{
                    path : "profile",
                    element :<Profile />,
                }]
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path : "/restaurant/:id",
                element : <RestaurantMenu />
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
        path : "login",
        element : <Login />,
        errorElement: <Error />,
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router= {appRouter}/>);
