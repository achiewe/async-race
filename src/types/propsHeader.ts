import React from 'react';

type PropsHeader = {
    pages: string[];
    pageStatus: {
        activePage: string;
        setActivePage: React.Dispatch<React.SetStateAction<string>>;
    };
};

export default PropsHeader;
