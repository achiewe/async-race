import brandsCollection from "../../services/BrandsCollection";
import { createCar } from "../../services/GetDataApi";
import getRandomInt from "../../services/GetRandomInt";
import modelCollection from "../../services/ModelCollection";
import { TCar } from "../../types/TCarsData";
import PropsRaceSettings from "../../types/PropsRaceSettings";
import Button from "../buttons/Button";

function RaceSettings({ carsControlData, dataStatus }: PropsRaceSettings) {
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
            disabled
            handleClick={() => {
              console.log("click");
            }}
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
