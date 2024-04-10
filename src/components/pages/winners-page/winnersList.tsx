import React from 'react';
import PropsWinnerList from '../../../types/propsWinnerList';
import WinnerItem from './winnerItem';
import WinnerTitle from './winnerTitle';
import declOfWords from '../../../services/wordsDeclination';

function WinnerList({ winners, allWinners, sortData, pageLimit, activePage }: PropsWinnerList) {
    return (
        <div className="winners-data">
            <p className="winners-title">
                Winners ({allWinners.winnersAmount} {declOfWords(allWinners.winnersAmount, ['car', 'cars'])})
            </p>

            <WinnerTitle sortData={sortData} />

            <ul className="winners-list">
                {winners.winnersFullData.map((winner, idx) => {
                    return (
                        <WinnerItem
                            number={activePage * pageLimit + idx - pageLimit + 1}
                            color={winner.color}
                            name={winner.name}
                            winsAmount={winner.wins}
                            bestTime={winner.time}
                            key={`${idx.toString()}`}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default WinnerList;
