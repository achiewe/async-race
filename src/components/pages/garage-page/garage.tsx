import { useState } from "react";
import { TAppState } from "../../../types/TAppState";
import CreateCarItem from "../../carSettings/createCar";

interface Props {
  appState: TAppState;
}
function Garage({ appState }: Props): JSX.Element {
  const [dataChanged, setDataChanged] = useState(false);
  return (
    <main>
      <div>
        <CreateCarItem
          dataStatus={{ dataChanged, setDataChanged }}
          appState={appState}
        />
      </div>
    </main>
  );
}

export default Garage;
