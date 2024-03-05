import { json } from "react-router-dom";
import User from "./User";
import UserClass from "./UserClass";
import Profile from "./Profile";
import React, {Component} from "react";
import UserContext from "../utils/UserContext";

class About extends Component {

    constructor(props){
        console.log("Parent Constructor");
        super(props)
        
    }

     componentDidMount() {
        console.log("parent component did mount");
        
      }

    componentDidUpdate(){
        console.log("parent component did update")
    }

    componentWillUnmount(){
        console.log("parent component will unmount")
    }

    render(){

    return(
        <div className="mt-28">
            {console.log("Parent render")}
            <h1>This about page</h1>
            <div>
                loggedIn User : 
                <UserContext.Consumer>
                    {(data) => <h1>{data.loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <h2>About US!!!!</h2>
            <Profile/>
        </div>
    );
}
}

export default About;