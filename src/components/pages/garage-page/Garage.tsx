import { useReducer, useState } from "react";
import { TAppState } from "../../../types/TAppState";
import { TCars } from "../../../types/TCarsData";
import { TCarControls } from "../../../types/TControls";
import Playground from "../../playground/Playground";
import CreateCar from "../../carSettings/CreateCar";
import RaceSettings from "../../carSettings/RaceSettings";
import UpdateCar from "../../carSettings/UpdateCar";

interface Props {
  appState: TAppState;
}
function Garage({ appState }: Props): JSX.Element {
  const pageLimit = 7;
  const [carsOnPage, setCarsOnPage] = useState<TCars>([]);
  const [dataChanged, setDataChanged] = useState(false);
  const manageCars = (
    state: TCarControls[],
    action: { type: string; car: TCarControls }
  ) => {
    if (action.type === "add") return [...state, action.car];

    if (action.type === "delete") {
      const newCollection = state.filter((item) => item !== action.car);
      return [...newCollection];
    }
    return [...state];
  };

  const [carsControl, carsControlDispatch] = useReducer(manageCars, []);
  return (
    <main>
      <div className="container garage-container">
        <div className="settings">
          <CreateCar
            dataStatus={{ dataChanged, setDataChanged }}
            appState={appState}
          />
          <UpdateCar appState={appState} />
          <div className="settings-btns">
            <RaceSettings
              carsControlData={{ carsControl, carsControlDispatch }}
              dataStatus={{ dataChanged, setDataChanged }}
            />
          </div>
        </div>
        <Playground
          pageLimit={pageLimit}
          carsOnPageData={{ carsOnPage, setCarsOnPage }}
          carsControlData={{ carsControl, carsControlDispatch }}
          dataStatus={{ dataChanged, setDataChanged }}
          appState={appState}
        />
      </div>
    </main>
  );
}

export default Garage;
