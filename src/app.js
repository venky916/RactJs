import React from 'react';
import ReactDOM from "react-dom/client";
//Default import
import Header from "./components/Header";
//Named import
// import {Title} from "./components/Header"
//or for accessing multiple import 
// import * as obj from "./components/Header"

import Body from './components/Body';
import Footer  from './components/Footer';
/*
Header
    -Logo(Title)
    -List Items(Right Side)
    -Cart
Body
    - Search bar
    - RestaurantCard {many cards}
        -Image
        -Name
        -Rating
        -Cusinees
Footer
    -links
    -Copyrights
*/

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
