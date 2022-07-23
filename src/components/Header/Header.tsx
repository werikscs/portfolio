import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { MenuBtn } from "../Icons/MenuBtn/MenuBtn";
import { ThemeBtn } from "../Icons/ThemeBtn/ThemeBtn";
import Text from "../Text";

import styles from "./header.module.scss";

export const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={`${styles.nav} ${theme}`}>
      <div>
        <h1>
          <Text theme={theme} color="color1" text="dev" />
          <Text theme={theme} color="color2" text="=" />
          <Text theme={theme} color="color3" text="wcs" />
        </h1>
        <ul>
          <li>
            <ThemeBtn />
          </li>
          <li>
            <MenuBtn />
          </li>
        </ul>
      </div>
    </nav>
  );
};
