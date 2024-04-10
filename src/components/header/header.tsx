import React from 'react';
import HeaderNav from '../nav/header/headerNav';
import PropsHeader from '../../types/propsHeader';

import './header.css';

function Header({ pages, pageStatus }: PropsHeader) {
    return (
        <header className="header">
            <h1 className="headling">RSS-Rally 2022</h1>
            <div className="container">
                <HeaderNav pages={pages} pageStatus={pageStatus} />
            </div>
            <img className="header-gif" src="../../../assets/animated-car.gif" alt="gifted car" />
        </header>
    );
}

export default Header;
