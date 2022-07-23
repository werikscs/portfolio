import styles from "./text.module.scss";

interface Props {
  text: string;
  color: string;
  theme: string;
}

export const Text = ({ theme, color, text }: Props) => {
  const colorText: string = color + "-" + theme;
  return <p className={`${styles[colorText]} ${styles.textStyle} }`}>{text}</p>;
};
