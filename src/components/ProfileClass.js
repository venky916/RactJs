import React from "react";

class Profile extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                name: "Dummy Name",
                location: "Dummy Location",
            },
        }
        console.log('child-constructor',this.props.name)
    }

    async componentDidMount(){
        // API calls
        const data = await fetch("https://api.github.com/users/venky916");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo :json,
        });

        console.log("child-ComponentDidMount", this.props.name);
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    render(){
        console.log("child-render", this.props.name)
        const {count} = this.state;
        return (
        <div>
            <h1> Profile Class Component</h1>
            <img src={this.state.userInfo.avatar_url} />
            <h2> Name : {this.state.userInfo.name} </h2>
            <h3> Location : {this.state.userInfo.location}</h3>
            {/* <button onClick={()=>{
                this.setState({
                    count:count+1,
                    count2:2,
                })
            }}>SetCount</button> */}
        </div>
        )
    }
}

export default Profile


/**
 * child const
 * child render
 * child-didmount
 * apicall
 *      setstate
 * child-render
 * update dom
 * component didupdate
 * 
 */