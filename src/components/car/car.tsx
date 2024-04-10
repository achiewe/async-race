import React, { useEffect, useState } from 'react';
import PropsCar from '../../types/propsCar';
import CarImage from './carImage';
import Controls from './carControls';

import './car.css';

function Car({ carsItemData, carNumber, dataStatus, carsControlData, appState }: PropsCar) {
    const [carIdState, setCarIdState] = useState(carsItemData.id);
    const [carNameState, setCarNameState] = useState(carsItemData.name);
    const [carColorState, setCarColorState] = useState(carsItemData.color);

    const carDataStatus = {
        nameData: {
            name: carNameState,
            setName: setCarNameState,
        },
        colorData: {
            color: carColorState,
            setColor: setCarColorState,
        },
        idData: {
            id: carIdState,
            setId: setCarIdState,
        },
    };

    useEffect(() => {
        const car = carsItemData;
        car.name = carNameState;
        car.color = carColorState;
    }, [carDataStatus]);

    useEffect(() => {
        return () => {
            setCarIdState(0);
            setCarNameState('');
            setCarColorState('');
        };
    }, []);

    const [isEngineStarted, setIsEngineStarted] = useState(false);
    const [isEngineStopped, setIsEngineStopped] = useState(false);
    const [carTimeAnimation, setCarTimeAnimation] = useState(0);

    return (
        <div className="car">
            <div className="car-description">
                <div className="car-info">
                    <span>{carNumber}. </span>
                    <span>{carNameState}</span>
                </div>
            </div>

            <Controls
                carDataStatus={carDataStatus}
                dataStatus={dataStatus}
                carsControlData={carsControlData}
                appState={appState}
                carEngineStart={{ isEngineStarted, setIsEngineStarted }}
                carEngineStop={{ isEngineStopped, setIsEngineStopped }}
                carAnimation={{ carTimeAnimation, setCarTimeAnimation }}
            />

            <div
                className={`car-image ${isEngineStarted ? 'startMove' : ''} ${isEngineStopped ? 'stopMove' : ''}`}
                style={{ animationDuration: `${carTimeAnimation}s` }}
            >
                <CarImage className="car-svg" color={carColorState} />
            </div>
        </div>
    );
}

export default Car;
