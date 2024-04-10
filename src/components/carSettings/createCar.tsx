import React from 'react';
import PropsCarCreate from '../../types/propsCarCreate';
import Button from '../buttons/button';
import { createCar } from '../../services/getDataApi';
import getRandomInt from '../../services/getRandomInt';

function CreateCarItem({ dataStatus, appState }: PropsCarCreate) {
    const onCreateCar = async () => {
        const newName =
            appState.createName.newCarName.length !== 0
                ? appState.createName.newCarName
                : `Your super-car RSS#${getRandomInt(1, 1000)}`;

        await createCar(newName, appState.createColor.newCarColor);

        dataStatus.setDataChanged(true);
        appState.createName.setNewCarName('');
        appState.createColor.setNewCarColor('#000000');
    };

    const onChangeName = ({ target }: { target: HTMLInputElement }) => {
        appState.createName.setNewCarName(target.value);
    };

    const onChangeColor = ({ target }: { target: HTMLInputElement }) => {
        appState.createColor.setNewCarColor(target.value);
    };

    return (
        <div className="settings-container">
            <div className="settings-content">
                <div className="button-group">
                    <p className="button-group-title">Create: </p>
                    <input
                        className="input-text"
                        type="text"
                        value={appState.createName.newCarName}
                        onChange={onChangeName}
                    />
                    <input
                        className="input-color"
                        type="color"
                        value={appState.createColor.newCarColor}
                        onChange={onChangeColor}
                    />
                </div>
                <Button className="button btn-create" text="Create" disabled={false} handleClick={onCreateCar} />
            </div>
        </div>
    );
}

export default CreateCarItem;
