import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.optionsContainer}>
      {options.map(option => {
        const label = option[0].toUpperCase() + option.slice(1);
        return (
          <button
            key={option}
            name={option}
            onClick={onLeaveFeedback}
            className={styles[option]}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
