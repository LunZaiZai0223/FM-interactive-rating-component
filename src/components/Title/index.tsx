import styles from './index.module.scss';

interface Props {
  titleMessage: string;
}

const Title = (props: Props) => {
  const { titleMessage } = props;
  return <h1 className={styles.title}>{titleMessage}</h1>;
};

export default Title;
