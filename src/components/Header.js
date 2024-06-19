import { useEffect, useState } from "react";
import Logo from '../assets/img/foodvilla.png';
import { Link } from "react-router-dom";

const loggedInUSer =()=>{
    //Api call to check authentication
    return true;
}

//functional component
export const Title = () => (
    <a href='/'> <img className="logo" src={Logo} alt='logo' /></a>
);

//React Component
const Header = () => {
    const [isLoggedIn , setIsLoggedIn]=useState(true);

    // useEffect(()=>{
    //     console.log('useEffect');
    // }, [isLoggedIn])

    // console.log('render')
    return (
        <div className='header'>
            <Title />

            <div className='nav-items'>
                <ul>
                    {/* 2 ways */}
                    <li><Link to="/">Home</Link></li>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <li>Cart</li>
                </ul>
            </div>
            {
                (isLoggedIn ? (<button onClick={()=>setIsLoggedIn(false)}>Log-Out</button>) : (<button onClick={()=>setIsLoggedIn(true)}>Log-In</button>))
            }
        </div>
    );
};


export default Header;