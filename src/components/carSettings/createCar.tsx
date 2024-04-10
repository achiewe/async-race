import React from "react";
import Button from "../buttons/button";
import PropsCarCreate from "../../types/propsCarCreate";

export default function CreateCarItem({
  appState,
  dataStatus,
}: PropsCarCreate) {
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
            onChange={onChangeName}
            value={appState.createName.newCarName}
          />
          <input
            value={appState.createColor.newCarColor}
            className="input-color"
            type="color"
            onChange={onChangeColor}
          />
        </div>
        <Button
          className="button btn-create"
          text="Create"
          disabled={false}
          handleClick={onCreateCar}
        />
      </div>
    </div>
  );
}
