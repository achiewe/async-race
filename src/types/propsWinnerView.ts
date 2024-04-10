import TWinnerListItem from './TWinnerListItem';

type PropsWinnerView = {
    pageLimit: number;
    activeContent: number;
    pagesAmount: number;
    setActiveContent: React.Dispatch<React.SetStateAction<number>>;
    winnersFullData: TWinnerListItem[];
    setWinnersFullData: React.Dispatch<React.SetStateAction<TWinnerListItem[]>>;
    winnersAmount: number;
    setWinnersAmount: React.Dispatch<React.SetStateAction<number>>;
    sortBy: string;
    setSortBy: React.Dispatch<React.SetStateAction<string>>;
    sortType: string;
    setSortType: React.Dispatch<React.SetStateAction<string>>;
};

export default PropsWinnerView;
