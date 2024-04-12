import "./WinnerFrame.css";
import PropsFrame from "../../types/PropsFrame";

function WinnerFrame({ className, winnerStatus }: PropsFrame) {
  const animationEnd = () => winnerStatus.setWinner(null);

  return (
    <div className={`frame-wrapper ${className}`} onAnimationEnd={animationEnd}>
      <div className="frame-body">
        <p className="text-winner">{winnerStatus.winner?.name} went first!</p>
        <p>Time: {winnerStatus.winner?.time} sec</p>
        <p>Congratulations!</p>
      </div>
    </div>
  );
}

export default WinnerFrame;
