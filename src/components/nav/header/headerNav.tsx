import PropsHeader from "../../../types/propsHeader";
import "./headerNav.css";
import HeaderNavItem from "./headerNavItem";

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
