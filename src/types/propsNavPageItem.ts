type PropsNavPageItem = {
    className: string;
    path: string;
    page: number;
    isActive: boolean;
    setActivePage: React.Dispatch<React.SetStateAction<number>>;
};

export default PropsNavPageItem;
