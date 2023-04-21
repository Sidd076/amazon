import React from 'react';
import './navbar.css';

function Navbar() {
    return (
        <div className="nav">
            <div className="inner">
                <div className="logo2">
                    <img src="./logo2.png" alt='logo' />
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search Amazon.in" />
                    <div className="search-icon">
                        <img src="./search.png" alt='Search-icon' />
                    </div>
                </div>
                <div className="right-container">
                    <div className="navbuttons">
                        <p>Hello,signin</p>
                        <p>Accounts & List</p>
                    </div>
                    <div className="navbuttons">
                        <p>Return </p>
                        <p>& Orders</p>
                    </div>
                    <div className="navbuttons">
                        <div className="basket">
                            <div className="cart">
                                <img src="./cart.jpg" alt='cart' />
                                <p>{0}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mobilesearch-bar">
                <input type="text" placeholder="Search Amazon.in" />
                <div className="search-icon">
                    <img src="./search.png" alt='Search-icon' />
                </div>
            </div>
        </div>
    );
}

export default Navbar;
