import Title from '../Title';
import Card from '../Card';

import { ReactComponent as ThankYouIcon } from '../../assets/images/illustration-thank-you.svg';
import styles from './index.module.scss';

interface Props {
  selectedRating: number;
}

const ThankYou = (props: Props) => {
  const { selectedRating } = props;
  return (
    <Card>
      <div className={styles.container}>
        <ThankYouIcon />
        <div className={`${styles['selected-message-wrapper']}`}>
          <span>You selected {selectedRating} out of 5</span>
        </div>
        <Title titleMessage="Thank you!" />
        <p className={styles.content}>
          We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in
          touch!
        </p>
      </div>
    </Card>
  );
};

export default ThankYou;
