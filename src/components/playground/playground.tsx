import React, { useEffect, useState } from 'react';
import PropsPlayground from '../../types/propsPlayground';
import Car from '../car/car';
import { getCars } from '../../services/getDataApi';
import PageNav from '../nav/page/pageNav';
import declOfWords from '../../services/wordsDeclination';
import Spinner from '../spinner/spinner';

import './playground.css';

function View(
    { pageLimit, carsOnPageData, dataStatus, carsControlData, appState }: PropsPlayground,
    carsAmount: number,
    pagesAmount: number
) {
    return (
        <>
            <div className="playground-page">
                <p className="playground-header">
                    Garage{' '}
                    <span className="playground-amount">
                        ({carsAmount} {declOfWords(carsAmount, ['car', 'cars'])})
                    </span>
                </p>
                {carsOnPageData.carsOnPage.map((item, idx) => (
                    <div className="playground-item" key={`playground_${item.id.toString()}`}>
                        <Car
                            carsItemData={item}
                            carNumber={appState.page.activeContent * pageLimit + idx - pageLimit + 1}
                            carsControlData={carsControlData}
                            dataStatus={dataStatus}
                            appState={appState}
                            key={`car_${item.id.toString()}`}
                        />
                        <img className="flag" src="../../assets/flag.png" alt="finish flag" />
                    </div>
                ))}
            </div>

            <div className="page-nav">
                <p className="page-nav-text">
                    Page {appState.page.activeContent}/{pagesAmount}
                </p>
                <PageNav page={appState.page} path="garage" pagesAmount={pagesAmount} />
            </div>
        </>
    );
}

function Playground({ pageLimit, carsOnPageData, dataStatus, carsControlData, appState }: PropsPlayground) {
    const [loading, setLoading] = useState(true);
    const [pagesAmount, setPagesAmount] = useState(1);
    const [carsAmount, setCarsAmount] = useState(0);

    const showCarsOnPage = async () => {
        const cars = await getCars(appState.page.activeContent, pageLimit);
        setPagesAmount(Math.ceil(cars.allCars / pageLimit));
        setCarsAmount(cars.allCars);
        carsOnPageData.setCarsOnPage(cars.carsOnPageX);
        setLoading(false);
    };

    useEffect(() => {
        showCarsOnPage();
    }, [appState.page.activeContent]);

    useEffect(() => {
        if (dataStatus.dataChanged) showCarsOnPage();
        dataStatus.setDataChanged(false);
    }, [dataStatus, pagesAmount]);

    const spinner = loading ? <Spinner /> : null;
    const content = !loading
        ? View({ pageLimit, carsOnPageData, dataStatus, carsControlData, appState }, carsAmount, pagesAmount)
        : null;

    return (
        <div className="playground">
            {spinner}
            {content}
        </div>
    );
}

export default Playground;
