import { useEffect, useState } from "react";
import PropsPlayground from "../../types/PropsPlayground";
import Car from "../car/Car";
import { getCars } from "../../services/GetDataApi";
import PageNav from "../nav/page/PageNav";
import declOfWords from "../../services/WordsDeclination";
import "./Playground.css";

function View(
  {
    pageLimit,
    carsOnPageData,
    dataStatus,
    carsControlData,
    appState,
  }: PropsPlayground,
  carsAmount: number,
  pagesAmount: number
): JSX.Element {
  return (
    <>
      <div className="playgroundPage">
        <p className="playgroundHeader">
          Garage{" "}
          <span className="playgroundAmount">
            ({carsAmount} {declOfWords(carsAmount, ["car", "cars"])})
          </span>
        </p>
        {carsOnPageData.carsOnPage.map((item, idx) => (
          <div
            className="playgroundItem"
            key={`playground_${item.id.toString()}`}
          >
            <Car
              carsItemData={item}
              carNumber={
                appState.page.activeContent * pageLimit + idx - pageLimit + 1
              }
              carsControlData={carsControlData}
              dataStatus={dataStatus}
              appState={appState}
              key={`car_${item.id.toString()}`}
            />
            <div className="roadDiv"></div>
            <img
              className="flag"
              src="../../assets/finishFlag.png"
              alt="finish flag"
            />
          </div>
        ))}
      </div>

      <div className="pageNav">
        <p className="pageNavText">
          Page {appState.page.activeContent}/{pagesAmount}
        </p>
        <PageNav page={appState.page} path="garage" pagesAmount={pagesAmount} />
      </div>
    </>
  );
}

function Playground({
  pageLimit,
  carsOnPageData,
  dataStatus,
  carsControlData,
  appState,
}: PropsPlayground) {
  const [loading, setLoading] = useState(true);
  const [pagesAmount, setPagesAmount] = useState(1);
  const [carsAmount, setCarsAmount] = useState(0);

  const showCarsOnPage = async () => {
    const cars = await getCars(appState.page.activeContent, pageLimit);
    setPagesAmount(Math.ceil(cars.allCars / pageLimit));
    setCarsAmount(cars.allCars);
    carsOnPageData.setCarsOnPage(cars.carsOnPageX);
    setLoading(false);
  };

  useEffect(() => {
    showCarsOnPage();
  }, [appState.page.activeContent]);

  useEffect(() => {
    if (dataStatus.dataChanged) showCarsOnPage();
    dataStatus.setDataChanged(false);
  }, [dataStatus, pagesAmount]);

  const spinner = loading ? "loading" : null;
  const content = !loading
    ? View(
        { pageLimit, carsOnPageData, dataStatus, carsControlData, appState },
        carsAmount,
        pagesAmount
      )
    : null;

  return (
    <div className="playground">
      {spinner}
      {content}
    </div>
  );
}

export default Playground;
