import React from 'react';
import PropsNavPageItem from '../../../types/propsNavPageItem';

function PageNavItem({ className, path, page, isActive, setActivePage }: PropsNavPageItem) {
    const changeActive = () => setActivePage(page);

    return (
        <li className={`${className}-item`}>
            <a
                className={`${className}-link ${isActive ? `${className}-link-active` : ''}`}
                href={`#${path}`}
                aria-label={`#${path}`}
                onClick={changeActive}
            >
                <span />
            </a>
        </li>
    );
}

export default PageNavItem;
