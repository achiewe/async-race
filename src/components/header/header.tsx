import "./header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="headling">Car Racing 2023</h1>

      <img
        src="../../../assets/lamborghini.png"
        className="header-gif"
        alt="lamborghini car"
      />
    </header>
  );
}

export default Header;
