import { useState } from "react";
import { TAppState } from "../../../types/TAppState";
import CreateCarItem from "../../carSettings/createCar";
import EditCarItem from "../../carSettings/updateCar";
import { TCars } from "../../../types/TCarsData";

interface Props {
  appState: TAppState;
}
function Garage({ appState }: Props): JSX.Element {
  const pageLimit = 7;
  const [carsOnPage, setCarsOnPage] = useState<TCars>([]);
  const [dataChanged, setDataChanged] = useState(false);
  return (
    <main>
      <div>
        <CreateCarItem
          dataStatus={{ dataChanged, setDataChanged }}
          appState={appState}
        />
        <EditCarItem appState={appState} />
      </div>
    </main>
  );
}

export default Garage;
