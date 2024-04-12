import brandsCollection from "../../services/BrandsCollection";
import { createCar } from "../../services/GetDataApi";
import getRandomInt from "../../services/GetRandomInt";
import modelCollection from "../../services/ModelCollection";
import { TCar } from "../../types/TCarsData";
import PropsRaceSettings from "../../types/PropsRaceSettings";
import Button from "../buttons/Button";
import { useState } from "react";
import TCarWinner from "../../types/TCarWinner";
import { TCarResp } from "../../types/TControls";

function RaceSettings({ carsControlData, dataStatus }: PropsRaceSettings) {
  const [isRaceStart, setIsRaceStart] = useState(false);
  const [isRaceStop, setIsRaceStop] = useState(false);
  const [getAnswer, setGetAnswer] = useState<TCarWinner | Error>(new Error());

  const startRace = async () => {
    setIsRaceStart(true);
    setIsRaceStop(false);

    const carsPromises: TCarResp[] = carsControlData.carsControl.map((car) => {
      return new Promise((resolve) => {
        (async () => {
          const carPromise = await car.carStart();
          if (carPromise instanceof Error) {
            throw new Error();
          }
          resolve(carPromise);
        })().catch((e) => e);
      });
    });

    const racerWinner: TCarWinner | Error = await Promise.any(carsPromises)
      .then((res) => res)
      .catch((e) => e);
    setGetAnswer(racerWinner);
  };

  const randomName = (): string => {
    const randomNum = getRandomInt(0, brandsCollection.length);
    return `${brandsCollection[randomNum]} ${modelCollection[randomNum]}`;
  };

  const randomColor = (): string => {
    return `#${(0x1000000 + Math.random() * 0xffffff)
      .toString(16)
      .slice(1, 7)}`;
  };

  const generateCars = async () => {
    const newCarsSet: Promise<TCar>[] = Array.from(Array(100)).map(() =>
      createCar(randomName(), randomColor())
    );
    await Promise.all(newCarsSet);
    dataStatus.setDataChanged(true);
  };

  return (
    <>
      <div className="settings-container">
        <div className="settings-content">
          <Button
            className="button btn-start-race"
            text="Start race!"
            disabled={isRaceStart}
            handleClick={startRace}
          />
          <Button
            className="button btn-stop-race"
            text="Reset"
            disabled
            handleClick={() => {
              console.log("click");
            }}
          />
          <Button
            className="button btn-generate"
            text="Generate cars"
            disabled={false}
            handleClick={generateCars}
          />
        </div>
      </div>
    </>
  );
}

export default RaceSettings;
