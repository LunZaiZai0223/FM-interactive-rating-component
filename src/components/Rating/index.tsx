import { Fragment } from 'react';

import Title from '../Title';
import Card from '../Card';
import Circle from '../Circle';

import start from '../../assets/images/icon-star.svg';
import styles from './index.module.scss';

interface Props {
  selectedRating?: null | number;
  onSelect?: Function;
  onSetStep?: Function;
}

const Rating = (props: Props) => {
  const { selectedRating, onSelect, onSetStep } = props;

  const ratingList = [1, 2, 3, 4, 5].map((rating, index) => {
    const classes = selectedRating === index + 1 ? 'is-select' : 'should-hover';
    return (
      <Fragment key={index}>
        <Circle classes={classes} clickHandler={onSelect}>
          {rating}
        </Circle>
      </Fragment>
    );
  });

  const submitRatingHandler = () => () => onSetStep?.(2);

  return (
    <Card>
      <Circle classes="circle-wrapper">
        <img src={start} alt="start-icon" />
      </Circle>
      <Title titleMessage="How did we do?" />
      <p className={styles.content}>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our
        offering!
      </p>
      <div className={`${styles['rating-list']}`}>{ratingList}</div>
      <button className={`${styles['submit-button']}`} {...(selectedRating && { onClick: submitRatingHandler() })}>
        Submit
      </button>
    </Card>
  );
};

export default Rating;
