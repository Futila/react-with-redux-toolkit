import { useSelector, useDispatch } from "react-redux";

import classes from "./Header.module.css";

import { authActions } from "../store/auth";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const listItems = (
    <>
      <li>
        <a href="/">My Products</a>
      </li>
      <li>
        <a href="/">My Sales</a>
      </li>
      <li>
        <button type="button" onClick={logoutHandler}>
          Logout
        </button>
      </li>
    </>
  );
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>{isAuthenticated && listItems}</ul>
      </nav>
    </header>
  );
};

export default Header;
