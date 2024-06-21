import { useEffect, useState } from "react";

const Profile =(props)=>{
    const [count , setCount] = useState(0);
    const [count2 , setCount2] = useState(0);
    useEffect(()=>{
        // Api Call
        const timer= setInterval(()=>{
            console.log("Namaste react OP");
        },1000)

        console.log("useffect");

        return ()=>{
            clearInterval(timer);
            console.log('useEffect return')
        }
    })
    console.log("render");
    return(
        <div className="box-border flex flex-col ">
            <h2 className="ring-offset-black" >Profile Functional Component</h2>
            <h3>Name : {props.name}</h3>
            <h3> Count : {count}</h3>
            <button onClick={()=>{
                let x=count+1;
                setCount(x);
                setCount2(2);
            }}>click Me</button>
        </div>
    )
}

export default Profile;