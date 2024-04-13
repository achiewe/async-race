import { useState } from "react";
import PropsWinner from "../../../types/PropsWinner";
import WinnerList from "./WinnersList";
import TWinner from "../../../types/TWinner";
import TWinnerListItem from "../../../types/TWinnerListItem";

function View({
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

function Winners(): JSX.Element {
  const pageLimit = 10;
  const [loading, setLoading] = useState(true);
  const [pagesAmount, setPagesAmount] = useState(1);
  const [activeContent, setActiveContent] = useState(1);
  const [winnersData, setWinnersData] = useState<TWinner[]>([]);
  const [winnersFullData, setWinnersFullData] = useState<TWinnerListItem[]>([]);
  const [winnersAmount, setWinnersAmount] = useState(0);
  const [sortBy, setSortBy] = useState("");
  const [sortType, setSortType] = useState("");
  const content = View({
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
  });

  return <main className="winners">{content}</main>;
}

export default Winners;
