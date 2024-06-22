import { createContext } from "react";

const userContext = createContext({ user1:{
    name : "Dummy name",
    email : "dummy@gmail.com",
}})

userContext.displayName ="userContext";
export default userContext;