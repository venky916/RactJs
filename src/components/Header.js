import { useEffect, useContext } from "react";
import Logo from '../assets/img/foodvilla.png';
import { Link, useNavigate } from "react-router-dom";
import useOnline from "../utils/useOnline";
import useLocalStorage from "../utils/useLocalStorage";
import useAuth from "../utils/useAuth";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

export const Title = () => (
    <a href='/'> <img className="h-28  p-2" src={Logo} alt='logo' /></a>
);

const Header = () => {
    const isOnline = useOnline();
    const [getLocalStorage, clearLocalstorage] = useLocalStorage("user")
    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useAuth();

    const { user1 } = useContext(userContext);

    const cartItems = useSelector(store => store.cart.items);
    // console.log(cartItems);

    useEffect(() => {
        if (getLocalStorage == null) {
            setIsLoggedIn(false);
        }
    }, [getLocalStorage]);

    return (
        <div className='flex justify-between items-center bg-pink shadow-lg sm:bg-blue-200'>
            <Title />
            {(isLoggedIn && <h3>Hi {getLocalStorage?.userName}!</h3>)}
            <div className='nav-items'>
                <ul className="flex py-10">
                    {/* 2 ways */}
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About</Link></li>
                    <li className="px-2"><Link to="/contact">Contact</Link></li>
                    <li className="px-2"><Link to="/instamart">InstaMart</Link></li>
                    <li className="px-2"><Link to="/demo">Demo</Link></li>
                    <li className="px-2"><Link to="/cart"> Cart {cartItems.length} -items </Link></li>
                </ul>
            </div>
            <h1>{isOnline ? "✅" : "🔴"}</h1>
            <span><h1 className="p-18 font-bold text-red ">{user1.name}</h1></span>
            {
                isLoggedIn ?
                    (<button onClick={() => {
                        clearLocalstorage();
                        setIsLoggedIn(false)
                    }}>Log-Out</button>) :
                    (<button onClick={() => {
                        navigate("/login");
                    }}>Log-In</button>)
            }
        </div>
    );
};


export default Header;