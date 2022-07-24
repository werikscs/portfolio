import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

import styles from "./email.module.scss";

export const EmailBtn = () => {
  const { theme } = useContext(ThemeContext);
  const icon: string = "icon-" + theme;

  return (
    <svg
      className={styles[icon]}
      width="28"
      height="25"
      viewBox="0 0 29 25"
      fill="transparent"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.96774 4.33871C14.1226 14.4097 14.9669 14.0506 25.4839 4.33871M2.48387 1H26.9677C27.7873 1 28.4516 1.66435 28.4516 2.48387V22.5161C28.4516 23.3356 27.7873 24 26.9677 24H2.48387C1.66435 24 1 23.3356 1 22.5161V2.48387C1 1.66435 1.66435 1 2.48387 1Z"
        stroke-linecap="round"
        stroke-linejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};
