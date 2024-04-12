import PropsNavHeaderItem from "../../../types/PropsNavHeaderItem";

function HeaderNavItem({
  className,
  path,
  description,
  isActive,
  setActivePage,
}: PropsNavHeaderItem): JSX.Element {
  const changeActive = () => {
    setActivePage(path);
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <li className={`${className}Item`}>
      <a
        className={`${className}Link ${
          isActive ? `${className}LinkActive` : ""
        }`}
        href={`#${path}`}
        onClick={changeActive}
      >
        {description}
      </a>
    </li>
  );
}

export default HeaderNavItem;
