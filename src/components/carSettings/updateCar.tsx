import { useEffect } from "react";
import { TAppState } from "../../types/TAppState";
import Button from "../buttons/button";

interface Props {
  appState: TAppState;
}

function EditCarItem({ appState }: Props) {
  return (
    <div className="settings-container">
      <div className="settings-content">
        <div className="button-group">
          <p className="button-group-title">Edit: </p>
          <input
            className="input-text"
            type="text"
            value={appState.editName.editedCarName}
            disabled={!appState.selected.selectedCar}
          />
          <input
            className="input-color"
            type="color"
            value={appState.editColor.editedCarColor}
            disabled={!appState.selected.selectedCar}
          />
        </div>
        <Button
          className="button btn-edit"
          text="Edit"
          disabled={!appState.selected.selectedCar}
          handleClick={console.log("click")}
        />
      </div>
    </div>
  );
}

export default EditCarItem;
