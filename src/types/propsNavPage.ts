type PropsNavPage = {
    path: string;
    pagesAmount: number;
    page: {
        activeContent: number;
        setActiveContent: React.Dispatch<React.SetStateAction<number>>;
    };
};

export default PropsNavPage;
