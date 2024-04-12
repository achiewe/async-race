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
    <li className={`${className}-item`}>
      <a
        className={`${className}-link ${
          isActive ? `${className}-link-active` : ""
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
