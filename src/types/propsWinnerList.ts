import TWinnerListItem from './TWinnerListItem';

type PropsWinnerList = {
    pageLimit: number;
    activePage: number;
    winners: {
        winnersFullData: TWinnerListItem[];
        setWinnersFullData: React.Dispatch<React.SetStateAction<TWinnerListItem[]>>;
    };
    allWinners: {
        winnersAmount: number;
        setWinnersAmount: React.Dispatch<React.SetStateAction<number>>;
    };
    sortData: {
        sortBy: string;
        setSortBy: React.Dispatch<React.SetStateAction<string>>;
        sortType: string;
        setSortType: React.Dispatch<React.SetStateAction<string>>;
    };
};

export default PropsWinnerList;
