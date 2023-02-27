import styles from "../../constants/styles";

const { yellow, reset } = styles;

const color = (text: string) => yellow + text + reset;

export default color;
