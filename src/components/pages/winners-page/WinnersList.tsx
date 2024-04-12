import PropsWinnerList from "../../../types/PropsWinnerList";
import WinnerTitle from "./WinnerTitle";

function WinnerList({
  winners,
  allWinners,
  sortData,
  pageLimit,
  activePage,
}: PropsWinnerList): JSX.Element {
  return (
    <div className="winnersData">
      <p className="winnersTitle">Winners</p>
      <WinnerTitle sortData={sortData} />
      <ul className="winners-list"></ul>
    </div>
  );
}

export default WinnerList;
