import { useContext } from "react"
import userContext from "../utils/userContext"

const Footer = () => {
    const {user1} = useContext(userContext);
    return (
        <h4 className="p-5 m-5 bg-red text-white text-center">This site is developed by {user1.name} -{user1.email} </h4>
    )
}

export default Footer