import { useEffect } from "react";
import { TAppState } from "../../types/TAppState";
import { updateCar } from "../../services/GetDataApi";
import Button from "../buttons/Button";
import "./Settings.css";

interface Props {
  appState: TAppState;
}

function UpdateCar({ appState }: Props) {
  const editName = ({ target }: { target: HTMLInputElement }) => {
    appState.editState.setEditedCarValueIsChanged(true);
    appState.editName.setEditedCarName(target.value);
  };

  const editColor = ({ target }: { target: HTMLInputElement }) => {
    appState.editState.setEditedCarValueIsChanged(true);
    appState.editColor.setEditedCarColor(target.value);
  };

  const editCar = async () => {
    if (appState.selected.selectedCar) {
      const updatedCar = await updateCar(
        appState.editName.editedCarName,
        appState.editColor.editedCarColor,
        appState.selected.selectedCar.idData.id
      );
      if (!(updatedCar instanceof Error)) {
        appState.selected.selectedCar.nameData.setName(
          appState.editName.editedCarName
        );
        appState.selected.selectedCar.colorData.setColor(
          appState.editColor.editedCarColor
        );
        appState.editState.setEditedCarValueIsChanged(false);
        appState.selected.setSelectedCar(null);
      }
    }
  };

  useEffect(() => {
    if (
      appState.selected.selectedCar &&
      !appState.editState.editedCarValueIsChanged
    ) {
      appState.editName.setEditedCarName(
        appState.selected.selectedCar.nameData.name
      );
      appState.editColor.setEditedCarColor(
        appState.selected.selectedCar.colorData.color
      );
    } else if (appState.selected.selectedCar === null) {
      appState.editColor.setEditedCarColor("#000000");
      appState.editName.setEditedCarName("");
    }
  }, [appState.selected]);
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
            onChange={editName}
          />
          <input
            className="input-color"
            type="color"
            value={appState.editColor.editedCarColor}
            disabled={!appState.selected.selectedCar}
            onChange={editColor}
          />
        </div>
        <Button
          className="button btn-edit"
          text="Edit"
          disabled={!appState.selected.selectedCar}
          handleClick={editCar}
        />
      </div>
    </div>
  );
}

export default UpdateCar;
