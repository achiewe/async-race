import { TCarDataStatus, TAppState } from './TAppState';
import { TCarControls } from './TControls';

type PropsControl = {
    carDataStatus: TCarDataStatus;
    carEngineStart: {
        isEngineStarted: boolean;
        setIsEngineStarted: React.Dispatch<React.SetStateAction<boolean>>;
    };
    carEngineStop: {
        isEngineStopped: boolean;
        setIsEngineStopped: React.Dispatch<React.SetStateAction<boolean>>;
    };
    carAnimation: {
        carTimeAnimation: number;
        setCarTimeAnimation: React.Dispatch<React.SetStateAction<number>>;
    };
    dataStatus: {
        dataChanged: boolean;
        setDataChanged: React.Dispatch<React.SetStateAction<boolean>>;
    };
    carsControlData: {
        carsControl: TCarControls[];
        carsControlDispatch: React.Dispatch<{
            type: string;
            car: TCarControls;
        }>;
    };
    appState: TAppState;
};

export default PropsControl;
