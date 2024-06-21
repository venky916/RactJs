import { useEffect, useState } from "react";
import Logo from '../assets/img/foodvilla.png';
import { Link, useNavigate } from "react-router-dom";
import useOnline from "../utils/useOnline";
import useLocalStorage from "../utils/useLocalStorage";
import useAuth from "../utils/useAuth";

export const Title = () => (
    <a href='/'> <img className="logo" src={Logo} alt='logo' /></a>
);

const Header = () => {
    const isOnline=useOnline();
    const [getLocalStorage,clearLocalstorage]=useLocalStorage("user")
    const navigate = useNavigate();

    const [isLoggedIn,setIsLoggedIn] = useAuth();

    useEffect(()=>{
        if (getLocalStorage==null){
            setIsLoggedIn(false);
        }
    },[getLocalStorage]);

    return (
        <div className='header'>
            <Title />
            {(isLoggedIn && <h3>Hi {getLocalStorage?.userName}!</h3>)}
            <div className='nav-items'>
                <ul>
                    {/* 2 ways */}
                    <li><Link to="/">Home</Link></li>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <li>Cart</li>
                    <Link to="/instamart"><li>InstaMart</li></Link>
                </ul>
            </div>
            <h1>{isOnline ? "✅":"🔴"}</h1>
            {
                isLoggedIn ?
                (<button onClick={()=>{
                    clearLocalstorage();
                    setIsLoggedIn(false)
                }}>Log-Out</button>) :
                (<button onClick={()=>{
                    navigate("/login");
                }}>Log-In</button>)
            }
        </div>
    );
};


export default Header;