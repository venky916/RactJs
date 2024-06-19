// import { Outlet } from "react-router-dom"
import Profile  from "./ProfileClass"
import ProfileFunctionalComponents from "./Profile"
import { Component } from "react"
// const About = ()=>{
//     return (
//         <div>
//             <h1> About Us Page</h1>
//             <p>
//                 {" "}
//                 This is a react router practice thisng working on
//             </p>
//              <Outlet />
//             <ProfileFunctionalComponents name={"Venky"}/>
//             <Profile name={"Maliga"}/>
//         </div>
//     )
// }

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
            <ProfileFunctionalComponents name={"Venky"} />
            {/* <Profile name={"First Child"} /> */}
            {/* <Profile name={"Second child"} /> */}
        </div>
        )
    }
}
export default About



/**
 * Parent-construct
 * parent-render
 *      firstchild-construct
 *      firstChild-render
 *      second-construct
 *      second-render
 * 
 *      Dom Updated for children
 * 
 *      firstchild -didmount
 *      secondchild -didmount
 * 
 * parent-didmount
 * ************************************************************
 * during Api calls
 * parent constr
 * parent-render
 *      child-constr
 *      child-render
 *      beacuse async api callin child didmount parent didmount goes
 * parent-didmount
 *      api data fetched
 *      child didmount
 *      due to setState
 *      child-rerender
 *      
 * 
 * 
 */