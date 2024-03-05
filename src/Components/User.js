import { useState } from "react";

const User = (props) => {
    const [count] = useState(0)
    const [count1] = useState(1)
    const {name , location , contact} = props;
    return(
        <div className="user-card">
            <h4>{count}</h4>
            <h4>{count1}</h4>
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h3>Contact:{contact}</h3>
        </div>
    );
}

export default User;