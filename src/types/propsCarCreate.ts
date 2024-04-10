import { TAppState } from './TAppState';

type PropsCarCreate = {
    dataStatus: {
        dataChanged: boolean;
        setDataChanged: React.Dispatch<React.SetStateAction<boolean>>;
    };
    appState: TAppState;
};

export default PropsCarCreate;
