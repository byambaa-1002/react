import styles from "./Box.module.css";
export default function Round(props) {
  const { text, displed } = props;
  return <div className={styles.Round}>{props.text}</div>;
}
