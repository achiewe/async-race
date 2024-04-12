import TCarWinner from "./TCarWinner";

interface PropsFrame {
  className: string;
  winnerStatus: {
    winner: TCarWinner | null;
    setWinner: React.Dispatch<React.SetStateAction<TCarWinner | null>>;
  };
}

export default PropsFrame;
