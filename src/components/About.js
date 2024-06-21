import Profile  from "./ProfileClass"
import { Component } from "react"

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
        <div>
            <h1> About Us Page</h1>
            <p>
                This is a react router practice thisng working on
            </p>

            <Profile name={"First Child"} />

        </div>
        )
    }
}
export default About
