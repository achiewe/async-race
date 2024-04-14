import PropsWinnerTitle from "../../../types/PropsWinnerTitle";

const SORT_CRITERIA = {
  WINS: "wins",
  TIME: "time",
};

function WinnerTitle({ sortData }: PropsWinnerTitle): JSX.Element {
  const sortBy = (criteria: string, type: string) => {
    sortData.setSortBy(criteria);
    sortData.setSortType(type);
  };

  const sortByWins = ({ target }: { target: HTMLInputElement }) => {
    sortBy(SORT_CRITERIA.WINS, target.checked ? "ASC" : "DESC");
  };

  const sortByTime = ({ target }: { target: HTMLInputElement }) => {
    sortBy(SORT_CRITERIA.TIME, target.checked ? "ASC" : "DESC");
  };

  return (
    <div className="winTitle">
      <div className="winTitleContent winTitleNumber">№</div>
      <div className="winTitleContent winTitleImage">Car</div>
      <div className="winTitleContent winTitleName">Model</div>
      <div className="winTitleContent winTitleQuantity">
        Total wins
        <label className="sort" htmlFor="wins-sort">
          <input
            id="wins-sort"
            className="sortCheckbox"
            type="checkbox"
            onChange={sortByWins}
          />
          <span className="sortArrow" />
        </label>
      </div>
      <div className="winTitleContent winTitleTime">
        Best time | sec
        <label className="sort" htmlFor="time-sort">
          <input
            id="time-sort"
            className="sortCheckbox"
            type="checkbox"
            onChange={sortByTime}
          />
          <span className="sortArrow" />
        </label>
      </div>
    </div>
  );
}

export default WinnerTitle;
