import styles from "./Button.module.css";
export default function Button(props) {
  const { text, displed } = props;
  return <button className={styles.error}>{props.text}</button>;
}
