import React, {useContext} from "react";
import './Header.css';
import { AppContext } from "../App";

function Header({ toggleActive }) {
    const {library,bag}=useContext(AppContext);
    return (
        <header>
            <a href='#' className="menu" onClick={toggleActive}>
                <i className="bi bi-sliders"></i>
            </a>
            <div className="userItems">
                <a href="#" className="icon">
                    <i className="bi bi-heart-fill"></i>
                    <span className="like">{library.length}</span>
                </a>
                <a href="#" className="icon">
                    <i className="bi bi-bag-fill"></i>
                    <span className="bag">{bag.length}</span>
                </a>
                <div className="user-container">
                    <div className="avatar">
                        <div className="user">
                            <span>Username</span>
                            <a href="#">View Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;
