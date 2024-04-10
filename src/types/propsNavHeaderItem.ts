type PropsNavHeaderItem = {
    className: string;
    path: string;
    isActive: boolean;
    description: string;
    setActivePage: React.Dispatch<React.SetStateAction<string>>;
};

export default PropsNavHeaderItem;
