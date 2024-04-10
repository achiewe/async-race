import React, { useState, useEffect } from 'react';
import TWinner from '../../../types/TWinner';
import TWinnerListItem from '../../../types/TWinnerListItem';
import PropsWinnerView from '../../../types/propsWinnerView';
import { TCar } from '../../../types/TCarsData';
import { getCar, getWinners } from '../../../services/getDataApi';
import PageNav from '../../nav/page/pageNav';
import WinnerList from './winnersList';
import Spinner from '../../spinner/spinner';

import './winners.css';

function View({
    pageLimit,
    activeContent,
    setActiveContent,
    winnersFullData,
    setWinnersFullData,
    winnersAmount,
    setWinnersAmount,
    sortBy,
    setSortBy,
    sortType,
    setSortType,
    pagesAmount,
}: PropsWinnerView) {
    return (
        <div className="winner-wrapper">
            <WinnerList
                pageLimit={pageLimit}
                activePage={activeContent}
                winners={{ winnersFullData, setWinnersFullData }}
                allWinners={{ winnersAmount, setWinnersAmount }}
                sortData={{ sortBy, setSortBy, sortType, setSortType }}
            />
            <div className="win-page-nav">
                <p className="win-page-text">
                    Page {activeContent}/{pagesAmount}
                </p>
                <PageNav page={{ activeContent, setActiveContent }} path="winners" pagesAmount={pagesAmount} />
            </div>
        </div>
    );
}

function Winners() {
    const pageLimit = 10;
    const [loading, setLoading] = useState(true);

    const [pagesAmount, setPagesAmount] = useState(1);
    const [activeContent, setActiveContent] = useState(1);
    const [winnersData, setWinnersData] = useState<TWinner[]>([]);
    const [winnersFullData, setWinnersFullData] = useState<TWinnerListItem[]>([]);
    const [winnersAmount, setWinnersAmount] = useState(0);

    const [sortBy, setSortBy] = useState('');
    const [sortType, setSortType] = useState('');

    useEffect(() => {
        (async () => {
            const winnersList = await getWinners(1, pageLimit);
            setPagesAmount(Math.ceil(winnersList.winnersX / pageLimit));
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const winnersList = await getWinners(activeContent, pageLimit, sortBy, sortType);
            setWinnersAmount(winnersList.winnersX);
            setWinnersData(winnersList.winnersOnPage);
            setLoading(false);
        })();
    }, [activeContent, sortBy, sortType]);

    useEffect(() => {
        (async () => {
            const dataPromises = winnersData.map(async (winPerson) => {
                const carData: TCar = await getCar(winPerson.id);
                const winnerFullData: TWinnerListItem = Object.assign(winPerson, carData);
                return winnerFullData;
            });

            const complexData = await Promise.all(dataPromises);
            setWinnersFullData(complexData);
        })();
    }, [winnersData]);

    const spinner = loading ? <Spinner /> : null;
    const content = !loading
        ? View({
              pageLimit,
              activeContent,
              setActiveContent,
              winnersFullData,
              setWinnersFullData,
              winnersAmount,
              setWinnersAmount,
              sortBy,
              setSortBy,
              sortType,
              setSortType,
              pagesAmount,
          })
        : null;

    return (
        <main className="winners">
            {spinner}
            {content}
        </main>
    );
}

export default Winners;
