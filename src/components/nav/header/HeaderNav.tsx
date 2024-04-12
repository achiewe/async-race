import PropsHeader from "../../../types/PropsHeader";
import "./HeaderNav.css";
import HeaderNavItem from "./HeaderNavItem";

function HeaderNav({ pages, pageStatus }: PropsHeader) {
  return (
    <nav className="nav">
      <ul className="nav-list">
        {pages.map((page, id) => (
          <HeaderNavItem
            className="nav"
            path={page}
            isActive={pageStatus.activePage === page}
            setActivePage={pageStatus.setActivePage}
            description={page}
            key={`${id.toString()}`}
          />
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNav;
