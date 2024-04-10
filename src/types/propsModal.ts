import TCarWinner from './TCarWinner';

type PropsModal = {
    className: string;
    winnerStatus: {
        winner: TCarWinner | null;
        setWinner: React.Dispatch<React.SetStateAction<TCarWinner | null>>;
    };
};

export default PropsModal;
