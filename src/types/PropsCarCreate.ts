import { TAppState } from "./TAppState";

interface PropsCarCreate {
  dataStatus: {
    dataChanged: boolean;
    setDataChanged: React.Dispatch<React.SetStateAction<boolean>>;
  };
  appState: TAppState;
}

export default PropsCarCreate;
