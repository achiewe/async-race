import React from 'react';
import PropsWinnerTitle from '../../../types/propsWinnerTitle';

function WinnerTitle({ sortData }: PropsWinnerTitle) {
    const sortByWins = ({ target }: { target: HTMLInputElement }) => {
        sortData.setSortBy('wins');

        if (target.checked) {
            sortData.setSortType('ASC');
        } else {
            sortData.setSortType('DESC');
        }
    };

    const sortByTime = ({ target }: { target: HTMLInputElement }) => {
        sortData.setSortBy('time');

        if (target.checked) {
            sortData.setSortType('ASC');
        } else {
            sortData.setSortType('DESC');
        }
    };

    return (
        <div className="win-title">
            <div className="win-title-content win-title-number">№</div>
            <div className="win-title-content win-title-image">Car</div>
            <div className="win-title-content win-title-name">Model</div>
            <div className="win-title-content win-title-quantity">
                Total wins
                <label className="sort" htmlFor="wins-sort">
                    <input id="wins-sort" className="sort-checkbox" type="checkbox" onChange={sortByWins} />
                    <span className="sort-arrow" />
                </label>
            </div>
            <div className="win-title-content win-title-time">
                Best time | sec
                <label className="sort" htmlFor="time-sort">
                    <input id="time-sort" className="sort-checkbox" type="checkbox" onChange={sortByTime} />
                    <span className="sort-arrow" />
                </label>
            </div>
        </div>
    );
}

export default WinnerTitle;
