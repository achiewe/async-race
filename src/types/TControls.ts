type TCarData = {
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

export type TCarResp = Promise<
    | Error
    | {
          id: number;
          name: string;
          time: number;
      }
>;

export type TCarControls = {
    carDataStatus: TCarData;
    carStart: () => TCarResp;
    carStop: () => Promise<void>;
};
