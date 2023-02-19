import { useState } from 'react';
import styles from './index.module.scss';

import Rating from '../Rating';
import ThankYou from '../ThankYou';

const Layout = () => {
  const [step, setStep] = useState<number>(1);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const content =
    step === 1 ? (
      <Rating onSelect={setSelectedRating} selectedRating={selectedRating} onSetStep={setStep} />
    ) : (
      <ThankYou selectedRating={selectedRating as number} />
    );

  return <section className={styles.layout}>{content}</section>;
};

export default Layout;
