import { useSelector, useDispatch } from "react-redux";

import { setIsNavExpanded } from "../../redux/features/navbar/navbarSlice";

import Brand from "./brand";
import "./navbar.css";

export default function Navbar() {
  const isNavExpanded = useSelector((state) => state.navbar.isNavExpanded);
  const dispatch = useDispatch();

  return (
    <div className="Navbar">
      <nav className="navigation">
        <Brand />
        <button
          className="hamburger"
          onClick={() => {
            dispatch(setIsNavExpanded());
          }}
        >
          <img
            className="hamburger-button-image"
            src={require("../../assets/icons/hamburger-button.png")}
            width="30px"
            height="30px"
            alt="Hamburger Button"
          />
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/singup">Singup</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
