import { TCars } from './TCarsData';
import { TAppState } from './TAppState';
import { TCarControls } from './TControls';

type PropsPlayground = {
    pageLimit: number;
    carsOnPageData: {
        carsOnPage: TCars;
        setCarsOnPage: React.Dispatch<React.SetStateAction<TCars>>;
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

export default PropsPlayground;
