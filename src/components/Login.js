import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNavigate } from "react-router-dom";
import useLocalStorage from "../utils/useLocalStorage";
import { useEffect } from "react";

const schema = yup.object().shape({
    email : yup.string().email().required(),
    password : yup.string().min(8).max(32).required(),
});

const Login  = () =>{

    const navigate = useNavigate();

    const [getLocalStorage,setLocalStorage] = useLocalStorage('user');

    useEffect(()=>{
        if (getLocalStorage?.token?.length ===100){
            navigate(-1);
        }
    },[])

    const { register , handleSubmit , formState : {errors,isSubmitting } , reset} = useForm({resolver:yupResolver(schema),});
    
    const handleNavigate = (values)=>{
        let index = values?.email.indexOf('@');
        let name  = values?.email.slice(0,index);

        const getRandomStringNthChar = ()=>{
            return [...Array(100)]
                .map(()=>Math.random().toString(36)[2])
                .join('');
        };

        setLocalStorage({
            ...getLocalStorage,
            "userName":name,
            "token":getRandomStringNthChar(),
        })

        navigate(-1);
    };

    if (getLocalStorage?.token?.length === 100) return null;

    return (
        <form className="login" onSubmit={handleSubmit(handleNavigate)} >
            <h2>Lets sign you in.</h2>
            <br />
            <input {...register("email")} type="email" placeholder="email" />
            <p style={{color:"red"}}>{errors.email?.message}</p>
            <br />
            <input {...register("password")} type="password" placeholder="password" />
            <p style={{ color: "red" }}>{errors.password?.message}</p>
            <br />
            <button disabled={isSubmitting} type="submit">{isSubmitting ? "Loading..." : "Log In"}</button>
        </form>
    )
}

export default Login;