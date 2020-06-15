import * as React from "react";

import "./logo.scss";

export const Logo: React.FC<{}> = (props) => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="logo"
  >
    <path d="M40 0H100V60L80 100H0V20L40 0Z" fill="white" />
  </svg>
);
