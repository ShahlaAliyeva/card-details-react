import React, { ReactNode } from "react";

function SideBar({ children }: { children: ReactNode }) {
  return (
    <aside className="aside">
      <div className="card__container">{children}</div>
    </aside>
  );
}

export default SideBar;
