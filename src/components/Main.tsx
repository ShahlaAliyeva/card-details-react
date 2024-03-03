import React, { ReactNode } from "react";

function Main({ children }: { children: ReactNode }) {
  return <div className="main__container">{children}</div>;
}

export default Main;
