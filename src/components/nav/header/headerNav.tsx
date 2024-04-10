import PropsHeader from "../../../types/propsHeader";
import "./headerNav.css";

function HeaderNav({ pages, pageStatus }: PropsHeader) {
  return (
    <nav className="nav">
      <ul className="nav-list"></ul>
    </nav>
  );
}

export default HeaderNav;
