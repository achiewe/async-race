import PropsHeader from "../../types/PropsHeader";
import HeaderNav from "../nav/header/HeaderNav";
import "./Header.css";

function Header({ pages, pageStatus }: PropsHeader): JSX.Element {
  return (
    <header className="header">
      <h1 className="headling">Welcome to car racing 2024</h1>
      <div className="container">
        <HeaderNav pages={pages} pageStatus={pageStatus} />
      </div>
      <img
        src="../../../assets/F1CarPng.png"
        className="headerGif"
        alt="lamborghini car"
      />
    </header>
  );
}

export default Header;
