import { useState } from "react";

const loggedInUSer =()=>{
    //Api call to check authentication
    return true;
}
//functional component
export const Title = () => (
    <a href='/'> <img className="logo" src='https://th.bing.com/th/id/R.dd4d1acde8fc22ed40fbce3acde6e99a?rik=%2b8JTWnyz2QTWFg&riu=http%3a%2f%2ffoodvilla.no%2fsrc%2fimg%2flogo.png&ehk=Wphc3mBmMYs0rOR4MjkO1zykcVnnjbx6MEDy3h1PSkw%3d&risl=&pid=ImgRaw&r=0' alt='logo' /></a>
);


//React Component
const Header = () => {
    const [isLoggedIn , setIsLoggedIn]=useState(true);

    return (
        <div className='header'>
            <Title />

            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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