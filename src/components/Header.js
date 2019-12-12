import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="header">
        <div className="header-container">
            <Link className="header__title" to="/">
                <h1>Reviews</h1>
            </Link>
        </div>
    </header>
);
export default Header;
