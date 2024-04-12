import { useEffect, useState } from "react";
import "./Car.css";
import CarControls from "./CarControls";
import CarImage from "./CarImage";
import PropsCar from "../../types/PropsCar";

function Car({
  carsItemData,
  carNumber,
  dataStatus,
  carsControlData,
  appState,
}: PropsCar): JSX.Element {
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
      setCarNameState("");
      setCarColorState("");
    };
  }, []);

  const [isEngineStarted, setIsEngineStarted] = useState(false);
  const [isEngineStopped, setIsEngineStopped] = useState(false);
  const [carTimeAnimation, setCarTimeAnimation] = useState(0);

  return (
    <div className="car">
      <div>
        <div>
          <span>{carNumber}. </span>
          <span>{carNameState}</span>
        </div>
      </div>

      <CarControls
        carDataStatus={carDataStatus}
        dataStatus={dataStatus}
        carsControlData={carsControlData}
        appState={appState}
        carEngineStart={{ isEngineStarted, setIsEngineStarted }}
        carEngineStop={{ isEngineStopped, setIsEngineStopped }}
        carAnimation={{ carTimeAnimation, setCarTimeAnimation }}
      />

      <div
        className={`carImage ${isEngineStarted ? "startMove" : ""} ${
          isEngineStopped ? "stopMove" : ""
        }`}
        style={{ animationDuration: `${carTimeAnimation}s` }}
      >
        <CarImage className="carSvg" color={carColorState} />
      </div>
    </div>
  );
}

export default Car;
