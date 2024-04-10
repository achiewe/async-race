import React from 'react';
import PropsHeader from '../../../types/propsHeader';
import HeaderNavItem from './headerNavItem';

import './headerNav.css';

function HeaderNav({ pages, pageStatus }: PropsHeader) {
    return (
        <nav className="nav">
            <ul className="nav-list">
                {pages.map((page, idx) => (
                    <HeaderNavItem
                        className="nav"
                        path={page}
                        isActive={pageStatus.activePage === page}
                        setActivePage={pageStatus.setActivePage}
                        description={page}
                        key={`${idx.toString()}`}
                    />
                ))}
            </ul>
        </nav>
    );
}

export default HeaderNav;
