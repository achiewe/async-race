import { createCar } from "../../services/GetDataApi";
import getRandomInt from "../../services/GetRandomInt";
import "./Settings.css";
import Button from "../buttons/Button";
import PropsCarCreate from "../../types/PropsCarCreate";

export default function CreateCar({
  appState,
  dataStatus,
}: PropsCarCreate): JSX.Element {
  const handleChangeName = (newName: string) => {
    appState.createName.setNewCarName(newName);
  };

  const handleCreateCar = async () => {
    let newName = appState.createName.newCarName;
    if (!newName) {
      newName = `Your super-car RSS#${getRandomInt(1, 1000)}`;
    }

    await createCar(newName, appState.createColor.newCarColor);

    dataStatus.setDataChanged(true);
    handleChangeName("");
    appState.createColor.setNewCarColor("#000000");
  };

  const handleChangeColor = (newColor: string) => {
    appState.createColor.setNewCarColor(newColor);
  };

  return (
    <div className="settingsContainer">
      <div className="settingsContent">
        <div className="buttonGroup">
          <p className="buttonGroupTitle">Create: </p>
          <input
            className="inputText"
            type="text"
            onChange={(e) => handleChangeName(e.target.value)}
            value={appState.createName.newCarName}
          />
          <input
            value={appState.createColor.newCarColor}
            className="inputColor"
            type="color"
            onChange={(e) => handleChangeColor(e.target.value)}
          />
        </div>
        <Button
          className="button btnCreate"
          text="Create"
          disabled={false}
          handleClick={handleCreateCar}
        />
      </div>
    </div>
  );
}
