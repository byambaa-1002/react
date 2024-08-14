import styles from "./Box.module.css";
export default function Box(props) {
  const { text, displed } = props;
  return <div className={styles.box}>{props.text}</div>;
}
