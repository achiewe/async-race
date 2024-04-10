import { TCar } from './TCarsData';
import { TCarControls } from './TControls';
import { TAppState } from './TAppState';

type PropsCar = {
    carsItemData: TCar;
    carNumber: number;
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

export default PropsCar;
