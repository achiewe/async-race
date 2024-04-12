import WinnerTitle from "./WinnersTitle";

function WinnerList(): JSX.Element {
  return (
    <div className="winnersData">
      <p className="winnersTitle">Winners</p>
      <WinnerTitle />
      <ul className="winnersList"></ul>
    </div>
  );
}

export default WinnerList;
