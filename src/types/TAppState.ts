export type TCarDataStatus = {
    idData: {
        id: number;
        setId: React.Dispatch<React.SetStateAction<number>>;
    };
    nameData: {
        name: string;
        setName: React.Dispatch<React.SetStateAction<string>>;
    };
    colorData: {
        color: string;
        setColor: React.Dispatch<React.SetStateAction<string>>;
    };
};

export type TAppState = {
    page: {
        activeContent: number;
        setActiveContent: React.Dispatch<React.SetStateAction<number>>;
    };
    createName: {
        newCarName: string;
        setNewCarName: React.Dispatch<React.SetStateAction<string>>;
    };
    createColor: {
        newCarColor: string;
        setNewCarColor: React.Dispatch<React.SetStateAction<string>>;
    };
    editName: {
        editedCarName: string;
        setEditedCarName: React.Dispatch<React.SetStateAction<string>>;
    };
    editColor: {
        editedCarColor: string;
        setEditedCarColor: React.Dispatch<React.SetStateAction<string>>;
    };
    editState: {
        editedCarValueIsChanged: boolean;
        setEditedCarValueIsChanged: React.Dispatch<React.SetStateAction<boolean>>;
    };
    selected: {
        selectedCar: TCarDataStatus | null;
        setSelectedCar: React.Dispatch<React.SetStateAction<TCarDataStatus | null>>;
    };
};
