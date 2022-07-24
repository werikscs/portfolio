import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import "../styles/_main.scss";

export const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme}>
      <section className="background flex">Home</section>
    </main>
  );
};
