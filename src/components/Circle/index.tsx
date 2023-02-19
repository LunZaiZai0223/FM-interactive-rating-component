import React from 'react';
import styles from './index.module.scss';

interface Props {
  children: React.ReactNode;
  classes?: string;
  clickHandler?: Function;
}

const Circle = (props: Props) => {
  const { children, classes, clickHandler } = props;

  const clickRatingHandler = (event: React.MouseEvent) => {
    if (clickHandler) {
      const targetRating = Number((event.target as HTMLDivElement).textContent);
      clickHandler?.(targetRating);
    }
  };

  return (
    <div className={`${styles.circle} ${classes ? styles[classes] : ''}`} onClick={clickRatingHandler}>
      {children}
    </div>
  );
};

export default Circle;
