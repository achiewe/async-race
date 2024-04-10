import React from 'react';
import PropsNavPage from '../../../types/propsNavPage';
import Button from '../../buttons/button';
import PageNavItem from './pageNavItem';

import './pageNav.css';

function PageNav({ page, path, pagesAmount }: PropsNavPage) {
    const toNext = () => {
        if (page.activeContent < pagesAmount) {
            page.setActiveContent(page.activeContent + 1);
        }
    };

    const toPrev = () => {
        if (page.activeContent > 1) {
            page.setActiveContent(page.activeContent - 1);
        }
    };

    return (
        <nav className="page-nav-pagination">
            <Button className="button btn-prev" text="prev" disabled={page.activeContent === 1} handleClick={toPrev} />

            <ul className="page-list">
                {Array.from(Array(pagesAmount).keys()).map((num, idx) => (
                    <PageNavItem
                        className="page"
                        path={path}
                        page={num + 1}
                        isActive={page.activeContent === num + 1}
                        setActivePage={page.setActiveContent}
                        key={`${idx.toString()}`}
                    />
                ))}
            </ul>

            <Button
                className="button btn-next"
                text="next"
                disabled={page.activeContent === pagesAmount}
                handleClick={toNext}
            />
        </nav>
    );
}

export default PageNav;
