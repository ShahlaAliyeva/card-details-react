import React, { ReactNode } from "react";

function InputLayout({
  children,
  className = "",
}: {
  children: ReactNode;
  className: string;
}) {
  return <div className={className}>{children}</div>;
}

export default InputLayout;
