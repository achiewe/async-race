import React from "react";

interface PropsHeader {
  pages: string[];
  pageStatus: {
    activePage: string;
    setActivePage: React.Dispatch<React.SetStateAction<string>>;
  };
}

export default PropsHeader;
