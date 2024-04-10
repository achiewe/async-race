import { TAppState } from "../../types/TAppState";

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
      </div>
    </div>
  );
}

export default EditCarItem;
