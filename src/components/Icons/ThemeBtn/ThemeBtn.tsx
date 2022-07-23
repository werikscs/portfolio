import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import styles from "./theme.module.scss";

export const ThemeBtn = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const icon: string = "icon-" + theme;

  return (
    <svg
      className={styles[icon]}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M12 1.4375H11.5V1.9375V21.0625H12V21.5625C14.8278 21.5625 17.5457 20.5097 19.5545 18.6265C21.5643 16.7423 22.7 14.1795 22.7 11.5C22.7 8.82047 21.5643 6.25775 19.5545 4.37352C17.5457 2.49032 14.8278 1.4375 12 1.4375ZM23.5 11.5C23.5 17.4073 18.3823 22.25 12 22.25C5.61766 22.25 0.5 17.4073 0.5 11.5C0.5 5.59267 5.61766 0.75 12 0.75C18.3823 0.75 23.5 5.59267 23.5 11.5Z" />
    </svg>
  );
};
