import { Component } from "react";
import React from "react";

class Profile extends Component {

  constructor(props) {
    console.log("profile Constructor");
    super(props);
    this.state = {
        userInfo: {
          name: "sai",
          avatar_url: "https://www.dummy-photo.com",
          login: "user",
        },
      };
  }

   async componentDidMount() {
    console.log("profile component did mount");
    const data = await fetch("https://api.github.com/users/Saikumar-starboy");
        const json = await data.json();
        // console.log(json);
    
        this.setState({
            userInfo: json,
          });
  }

  componentDidUpdate(){
    console.log("profile component did update");
  }

  componentWillUnmount(){
    console.log("profile component will unmount");
  }

  render() {
    console.log("profile render");

    const { name, avatar_url, login } =  this.state.userInfo;
    return (
      <div className="profile mt-28">
        <img src={avatar_url} />
        <h3>name: {name}</h3>
        <h4>login-id :{login}</h4>
      </div>
    );
  }
}

export default Profile;