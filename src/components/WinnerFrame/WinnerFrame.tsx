import "./WinnerFrame.css";
import PropsFrame from "../../types/PropsFrame";

function WinnerFrame({ className, winnerStatus }: PropsFrame): JSX.Element {
  const animationEnd = () => winnerStatus.setWinner(null);

  return (
    <div className={`frameWrapper ${className}`} onAnimationEnd={animationEnd}>
      <div className="frameBody">
        <p className="textWinner">{winnerStatus.winner?.name} went first!</p>
        <p>Time: {winnerStatus.winner?.time} sec</p>
        <p>Congratulations!</p>
      </div>
    </div>
  );
}

export default WinnerFrame;
