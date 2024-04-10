import React from 'react';
import PropsNavHeaderItem from '../../../types/propsNavHeaderItem';

function HeaderNavItem({ className, path, description, isActive, setActivePage }: PropsNavHeaderItem) {
    const changeActive = () => {
        setActivePage(path);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return (
        <li className={`${className}-item`}>
            <a
                className={`${className}-link ${isActive ? `${className}-link-active` : ''}`}
                href={`#${path}`}
                onClick={changeActive}
            >
                {description}
            </a>
        </li>
    );
}

export default HeaderNavItem;
