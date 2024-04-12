import brandsCollection from "../../services/BrandsCollection";
import {
  createCar,
  createWinner,
  getWinner,
  updateWinner,
} from "../../services/GetDataApi";
import getRandomInt from "../../services/GetRandomInt";
import modelCollection from "../../services/ModelCollection";
import { TCar } from "../../types/TCarsData";
import PropsRaceSettings from "../../types/PropsRaceSettings";
import Button from "../buttons/Button";
import { useEffect, useState } from "react";
import TCarWinner from "../../types/TCarWinner";
import { TCarResp } from "../../types/TControls";
import TGetWinner from "../../types/TGetWinner";
import WinnerFrame from "../WinnerFrame/WinnerFrame";

function RaceSettings({
  carsControlData,
  dataStatus,
}: PropsRaceSettings): JSX.Element {
  const [isRaceStart, setIsRaceStart] = useState(false);
  const [isRaceStop, setIsRaceStop] = useState(false);
  const [winner, setWinner] = useState<TCarWinner | null>(null);
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

  const stopRace = async () => {
    setIsRaceStop(true);
    setIsRaceStart(false);
    const carsPromises = carsControlData.carsControl.map((car) =>
      car.carStop()
    );
    await Promise.all(carsPromises);
    setWinner(null);
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

  useEffect(() => {
    (async () => {
      if (winner) {
        const findWinner: TGetWinner | Error = await getWinner(winner.id);
        if (findWinner instanceof Error)
          await createWinner(winner.id, 1, winner.time);
        else if (findWinner.time < winner.time) {
          await updateWinner(
            findWinner.id,
            findWinner.wins + 1,
            findWinner.time
          );
        } else {
          await updateWinner(findWinner.id, findWinner.wins + 1, winner.time);
        }
      }
    })();
  }, [winner]);

  useEffect(() => {
    if (!(getAnswer instanceof Error) && !isRaceStop) {
      setWinner(getAnswer);
    }
  }, [getAnswer]);

  return (
    <>
      <div className="settingsContainer">
        <div className="settingsContent">
          <Button
            className="button btnStartRace"
            text="Start race"
            disabled={isRaceStart}
            handleClick={startRace}
          />
          <Button
            className="button btnStopRace"
            text="Reset"
            disabled={isRaceStop}
            handleClick={stopRace}
          />
          <Button
            className="button btnGenerate"
            text="Generate cars"
            disabled={false}
            handleClick={generateCars}
          />
        </div>
      </div>
      <WinnerFrame
        className={`${winner ? "activeModal" : ""}`}
        winnerStatus={{ winner, setWinner }}
      />
    </>
  );
}

export default RaceSettings;
