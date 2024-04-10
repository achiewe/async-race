import React, { useState, useEffect } from 'react';
import { TCarResp } from '../../types/TControls';
import { TCar } from '../../types/TCarsData';
import TCarWinner from '../../types/TCarWinner';
import TGetWinner from '../../types/TGetWinner';
import PropsRaceSettings from '../../types/propsRaceSettings';
import Button from '../buttons/button';
import { getWinner, createWinner, updateWinner, createCar } from '../../services/getDataApi';
import ModalMessage from '../modal/modal';

import brandsCollection from '../../services/brandCollection';
import modelCollection from '../../services/modelCollection';
import getRandomInt from '../../services/getRandomInt';

function raceSettings({ carsControlData, dataStatus }: PropsRaceSettings) {
    const [isRaceStart, setIsRaceStart] = useState(false);
    const [isRaceStop, setIsRaceStop] = useState(false);
    const [winner, setWinner] = useState<TCarWinner | null>(null);
    const [getAnswer, setGetAnswer] = useState<TCarWinner | Error>(new Error());

    const startRace = async () => {
        setIsRaceStart(true);
        setIsRaceStop(false);

        const carsPromises: TCarResp[] = carsControlData.carsControl.map((car) => {
            return new Promise((resolve) => {
                (async () => {
                    const carPromise = await car.carStart();
                    if (carPromise instanceof Error) {
                        throw new Error();
                    }
                    resolve(carPromise);
                })().catch((e) => e);
            });
        });

        const racerWinner: TCarWinner | Error = await Promise.any(carsPromises)
            .then((res) => res)
            .catch((e) => e);
        setGetAnswer(racerWinner);
    };

    const stopRace = async () => {
        setIsRaceStop(true);
        setIsRaceStart(false);
        const carsPromises = carsControlData.carsControl.map((car) => car.carStop());
        await Promise.all(carsPromises);
        setWinner(null);
    };

    const randomName = (): string => {
        const randomNum = getRandomInt(0, brandsCollection.length);
        return `${brandsCollection[randomNum]} ${modelCollection[randomNum]}`;
    };

    const randomColor = (): string => {
        return `#${(0x1000000 + Math.random() * 0xffffff).toString(16).slice(1, 7)}`;
    };

    const generateCars = async () => {
        // создаем 100 произвольных машин (по условию)
        const newCarsSet: Promise<TCar>[] = Array.from(Array(100)).map(() => createCar(randomName(), randomColor()));
        await Promise.all(newCarsSet);
        dataStatus.setDataChanged(true);
    };

    useEffect(() => {
        (async () => {
            if (winner) {
                const findWinner: TGetWinner | Error = await getWinner(winner.id);
                if (findWinner instanceof Error) await createWinner(winner.id, 1, winner.time);
                else if (findWinner.time < winner.time) {
                    await updateWinner(findWinner.id, findWinner.wins + 1, findWinner.time);
                } else {
                    await updateWinner(findWinner.id, findWinner.wins + 1, winner.time);
                }
            }
        })();
    }, [winner]);

    useEffect(() => {
        if (!(getAnswer instanceof Error) && !isRaceStop) {
            setWinner(getAnswer);
        }
    }, [getAnswer]);

    return (
        <>
            <div className="settings-container">
                <div className="settings-content">
                    <Button
                        className="button btn-start-race"
                        text="Start race!"
                        disabled={isRaceStart}
                        handleClick={startRace}
                    />
                    <Button
                        className="button btn-stop-race"
                        text="Reset"
                        disabled={isRaceStop}
                        handleClick={stopRace}
                    />
                    <Button
                        className="button btn-generate"
                        text="Generate cars"
                        disabled={false}
                        handleClick={generateCars}
                    />
                </div>
            </div>

            <ModalMessage className={`${winner ? 'active-modal' : ''}`} winnerStatus={{ winner, setWinner }} />
        </>
    );
}

export default raceSettings;
