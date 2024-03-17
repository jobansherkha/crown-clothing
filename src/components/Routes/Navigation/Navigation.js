import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../../Assets/crown.svg";
import "./Navigation.scss";
import { UserContext } from "../../context/UserContext";
import { signOutAuth } from "../../utils/Utils";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import CartIcon from "../../cart/CartIcon";
import CartDropDown from "../../cart/CartDropDown";
export const Navigation = () => {
  const { currentUser, setcurrentUser } = useContext(UserContext);

  const SignOutHandler = async()=>{

    await signOutAuth()
    setcurrentUser(null)
  }
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={SignOutHandler}>
              {" "}
              Signout
            </span>
          ) : (
            <Link className="nav-link" to="/signin">
              SIGN IN
            </Link>
          )}
          <Link className="nav-link" >
          <CartDropDown/>
          </Link>
          
        </div>
        
      </div>
      <Outlet />
    </Fragment>
  );
};
