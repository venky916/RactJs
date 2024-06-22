import Profile  from "./ProfileClass";
import { Component } from "react";
import userContext from "../utils/userContext";

class About extends Component {
    constructor(props){
        super(props);
        // console.log('parent-constructor');
        }

    componentDidMount(){
        //Api Call
        // console.log("parent-CompnentDIdMount");
    }
    render(){
        // console.log("parent-render");
        return(
            <div className="p-2 m-2 box-border bg-gradient-to-r from-violet-500 to-fuchsia-500">
            <h1> About Us Page</h1>
            <userContext.Consumer>
                {({user1})=><h4 className="font-bold text-xl p-10">{user1.name}-{user1.email}</h4>}
            </userContext.Consumer>
            <p>
                This is a react router practice thisng working on
            </p>

            <Profile name={"First Child"} />

        </div>
        )
    }
}
export default About
