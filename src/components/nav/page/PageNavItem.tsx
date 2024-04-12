import PropsNavPageItem from "../../../types/PropsNavPageItem";

function PageNavItem({
  className,
  path,
  page,
  isActive,
  setActivePage,
}: PropsNavPageItem): JSX.Element {
  const changeActive = () => setActivePage(page);

  return (
    <li className={`${className}Item`}>
      <a
        className={`${className}Link ${
          isActive ? `${className}LinkActive` : ""
        }`}
        href={`#${path}`}
        aria-label={`#${path}`}
        onClick={changeActive}
      >
        <span />
      </a>
    </li>
  );
}

export default PageNavItem;
