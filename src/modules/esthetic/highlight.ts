import styles from "../../constants/styles";

const { bgGreen, black, reset } = styles;

const highlight = (text: string) => bgGreen + black + text + reset;

export default highlight;
