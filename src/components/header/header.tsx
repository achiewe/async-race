import PropsHeader from "../../types/propsHeader";
import HeaderNav from "../nav/header/headerNav";
import "./header.css";

function Header({ pages, pageStatus }: PropsHeader) {
  return (
    <header className="header">
      <h1 className="headling">Car Racing 2024</h1>
      <div className="container">
        <HeaderNav pages={pages} pageStatus={pageStatus} />
      </div>
      <img
        src="../../../assets/lamborghini.png"
        className="header-gif"
        alt="lamborghini car"
      />
    </header>
  );
}

export default Header;
