import { createCar } from "../../services/GetDataApi";
import getRandomInt from "../../services/GetRandomInt";
import "./Settings.css";
import Button from "../buttons/Button";
import PropsCarCreate from "../../types/PropsCarCreate";

export default function CreateCar({ appState, dataStatus }: PropsCarCreate) {
  const onChangeName = ({ target }: { target: HTMLInputElement }) => {
    appState.createName.setNewCarName(target.value);
  };

  const onCreateCar = async () => {
    const newName =
      appState.createName.newCarName.length !== 0
        ? appState.createName.newCarName
        : `Your super-car RSS#${getRandomInt(1, 1000)}`;

    await createCar(newName, appState.createColor.newCarColor);

    dataStatus.setDataChanged(true);
    appState.createName.setNewCarName("");
    appState.createColor.setNewCarColor("#000000");
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
