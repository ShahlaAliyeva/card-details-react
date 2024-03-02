function SideBar({ children }) {
  return (
    <aside className="aside">
      <div className="card__container">{children}</div>
    </aside>
  );
}

export default SideBar;
