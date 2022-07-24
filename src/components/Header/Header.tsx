import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useViewport } from "../../context/ViewportContext";
import { EmailBtn } from "../Icons/EmailBtn/EmailBtn";
import { GitBtn } from "../Icons/GitBtn/GitBtn";
import { LinkedinBtn } from "../Icons/LinkedinBtn/LinkedinBtn";
import { MenuBtn } from "../Icons/MenuBtn/MenuBtn";
import { ThemeBtn } from "../Icons/ThemeBtn/ThemeBtn";
import Text from "../Text";

import styles from "./header.module.scss";

export const Header = () => {
  const { theme } = useContext(ThemeContext);
  const { width } = useViewport();

  const liTheme = `${styles.li} ${styles["li" + theme]}`;

  const breakpoint = 650;

  return (
    <nav className={`${styles.nav} ${theme}`}>
      <div>
        <Link to={"/"}>
          <h1>
            <Text theme={theme} color="color1" text="dev" />
            <Text theme={theme} color="color2" text="=" />
            {width >= breakpoint ? (
              <Text theme={theme} color="color3" text="weriks_cs" />
            ) : (
              <Text theme={theme} color="color3" text="wcs" />
            )}
          </h1>
        </Link>

        <ul>
          {width >= breakpoint ? (
            <>
              <ul>
                <li className={liTheme}>
                  <Link to="/projetos">PROJETOS</Link>
                </li>
                <li className={liTheme}>
                  <Link to="/sobre">SOBRE</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    target="_blank"
                    href="https://github.com/werikscs"
                    rel="noreferrer">
                    <GitBtn />
                  </a>
                </li>
                <li>
                  <LinkedinBtn />
                </li>
                <li>
                  <EmailBtn />
                </li>
              </ul>
            </>
          ) : (
            <></>
          )}
          <li>
            <ThemeBtn />
          </li>
          <li>{width >= breakpoint ? <></> : <MenuBtn />}</li>
        </ul>
      </div>
    </nav>
  );
};
