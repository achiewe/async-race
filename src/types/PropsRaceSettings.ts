import { TCarControls } from "./TControls";

interface PropsRaceSettings {
  carsControlData: {
    carsControl: TCarControls[];
    carsControlDispatch: React.Dispatch<{
      type: string;
      car: TCarControls;
    }>;
  };
  dataStatus: {
    dataChanged: boolean;
    setDataChanged: React.Dispatch<React.SetStateAction<boolean>>;
  };
}

export default PropsRaceSettings;
