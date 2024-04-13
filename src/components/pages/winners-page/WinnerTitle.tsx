import PropsWinnerTitle from "../../../types/PropsWinnerTitle";

function WinnerTitle({ sortData }: PropsWinnerTitle): JSX.Element {
  const sortByWins = ({ target }: { target: HTMLInputElement }) => {
    sortData.setSortBy("wins");

    if (target.checked) {
      sortData.setSortType("ASC");
    } else {
      sortData.setSortType("DESC");
    }
  };

  const sortByTime = ({ target }: { target: HTMLInputElement }) => {
    sortData.setSortBy("time");

    if (target.checked) {
      sortData.setSortType("ASC");
    } else {
      sortData.setSortType("DESC");
    }
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
