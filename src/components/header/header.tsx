import PropsHeader from "../../types/propsHeader";
import "./header.css";

function Header({ pages, pageStatus }: PropsHeader) {
  return (
    <header className="header">
      <h1 className="headling">Car Racing 2024</h1>

      <img
        src="../../../assets/lamborghini.png"
        className="header-gif"
        alt="lamborghini car"
      />
    </header>
  );
}

export default Header;
