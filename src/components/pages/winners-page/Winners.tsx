import PropsWinner from "../../../types/PropsWinner";
import WinnerList from "./WinnersList";

function Winners({
  pageLimit,
  activeContent,
  setActiveContent,
  winnersFullData,
  setWinnersFullData,
  winnersAmount,
  setWinnersAmount,
  sortBy,
  setSortBy,
  sortType,
  setSortType,
  pagesAmount,
}: PropsWinner): JSX.Element {
  return (
    <div className="winnerList">
      <WinnerList
        pageLimit={pageLimit}
        activePage={activeContent}
        winners={{ winnersFullData, setWinnersFullData }}
        allWinners={{ winnersAmount, setWinnersAmount }}
        sortData={{ sortBy, setSortBy, sortType, setSortType }}
      />
    </div>
  );
}

export default Winners;
