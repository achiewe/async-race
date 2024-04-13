import { useEffect, useRef } from "react";
import Button from "../buttons/Button";
import {
  //   getWinner,
  //   deleteWinner,
  deleteCar,
  startEngine,
  stopEngine,
  drive,
  getWinner,
  deleteWinner,
} from "../../services/GetDataApi";
import "./CarControls.css";
import PropsControl from "../../types/PropsControl";

function CarControls({
  carDataStatus,
  dataStatus,
  appState,
  carEngineStart,
  carEngineStop,
  carAnimation,
  carsControlData,
}: PropsControl): JSX.Element {
  const selectCar = () => {
    appState.editState.setEditedCarValueIsChanged(false);
    appState.selected.setSelectedCar(carDataStatus);
  };

  const removeCar = async () => {
    const removeWin = await getWinner(carDataStatus.idData.id);

    if (!(removeWin instanceof Error)) {
      await deleteWinner(carDataStatus.idData.id);
    }

    const removeAuto = await deleteCar(carDataStatus.idData.id);

    if (!(removeAuto instanceof Error)) {
      dataStatus.setDataChanged(true);
    }
  };

  const carStart = async () => {
    const startMoving = await startEngine(carDataStatus.idData.id);

    if (!(startMoving instanceof Error)) {
      carEngineStop.setIsEngineStopped(false);
      carEngineStart.setIsEngineStarted(true);

      const time = +(
        startMoving.distance /
        startMoving.velocity /
        1000
      ).toFixed(2);
      carAnimation.setCarTimeAnimation(time);

      const driveForward = await drive(carDataStatus.idData.id);

      if (driveForward instanceof Error) {
        carEngineStop.setIsEngineStopped(true);
        return new Error();
      }

      return {
        name: carDataStatus.nameData.name,
        id: carDataStatus.idData.id,
        time,
      };
    }

    return new Error();
  };

  const carStop = async () => {
    carEngineStop.setIsEngineStopped(true);
    const carStoppedEngine = await stopEngine(carDataStatus.idData.id);

    if (!(carStoppedEngine instanceof Error)) {
      carEngineStart.setIsEngineStarted(false);
      carAnimation.setCarTimeAnimation(0);
    }
  };

  const carItemDataControl = useRef({ carDataStatus, carStart, carStop });

  useEffect(() => {
    if (appState.selected.selectedCar?.idData.id === carDataStatus.idData.id) {
      appState.selected.setSelectedCar(carDataStatus);
    }

    carsControlData.carsControlDispatch({
      type: "add",
      car: carItemDataControl.current,
    });

    return () => {
      carsControlData.carsControlDispatch({
        type: "delete",
        car: carItemDataControl.current,
      });
    };
  }, []);

  return (
    <div className="carControls">
      <div className="carControlButtons">
        <Button
          className="button btnSelect"
          text="Select"
          disabled={
            appState.selected.selectedCar?.idData.id === carDataStatus.idData.id
          }
          handleClick={selectCar}
        />

        <Button
          className="button btnRemove"
          text="Remove"
          disabled={false}
          handleClick={removeCar}
        />
      </div>

      <div className="carControlButtons">
        <Button
          className="button btnStart"
          text="A"
          disabled={carEngineStart.isEngineStarted}
          handleClick={carStart}
        />
        <Button
          className="button btnStop"
          text="B"
          disabled={!carEngineStart.isEngineStarted}
          handleClick={carStop}
        />
      </div>
    </div>
  );
}

export default CarControls;
