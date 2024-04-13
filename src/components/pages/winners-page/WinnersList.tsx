import declOfWords from "../../../services/WordsDeclination";
import PropsWinnerList from "../../../types/PropsWinnerList";
import WinnerItem from "./WinnerItem";
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
      <p>
        Winners ({allWinners.winnersAmount}{" "}
        {declOfWords(allWinners.winnersAmount, ["car", "cars"])})
      </p>
      <WinnerTitle sortData={sortData} />
      <ul className="winners-list">
        {winners.winnersFullData.map((winner, idx) => {
          return (
            <WinnerItem
              number={activePage * pageLimit + idx - pageLimit + 1}
              color={winner.color}
              name={winner.name}
              winsAmount={winner.wins}
              bestTime={winner.time}
              key={`${idx.toString()}`}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default WinnerList;
