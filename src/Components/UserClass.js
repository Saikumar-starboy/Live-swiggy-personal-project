import React from "react";

class UserClass extends React.Component {
  constructor(props) {

    console.log("Child Constructor");
    super(props);

    this.state = {
      count: 0,
      count1: 1,
    };
  }

  componentDidMount(){
    console.log("Child DidMount");
  }
  render() {
    {console.log("Child render")}
    const { name, location, contact } = this.props;
    const { count, count1 } = this.state;
    return (
      <div className="user-card">
        <h4>count: {count}</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count++
        </button>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h3>Contact:{contact}</h3>
      </div>
    );
  }
}

export default UserClass;
