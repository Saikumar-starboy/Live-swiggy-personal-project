import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const {loggedInUser} = useContext(UserContext)
  
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items)

  return (
    <div className="flex justify-between bg-pink-100 shadow-md mb-5 fixed w-full top-0 left-0 z-10">
      <div className="logo-container">
        <img className="w-20 m-2" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-5 m-4">
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4"><Link to="/profile">Profile</Link></li>
          <li className="px-4"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
          {console.log(cartItems)}
          <li
            className="px-4"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("LogOut")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </li>
          <li className="px-4">status : {onlineStatus === true ? "🟢" : "🔴"}</li>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
