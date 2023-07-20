import PropTypes from 'prop-types';
import React from 'react';
import css from './feedbackOptions.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => (
  <div className={css.button_container}>
    {options.map(option => (
      <button
        className={css.button}
        onClick={() => onLeaveFeedback(option)}
        key={option}
        type="button"
      >
        {option}
      </button>
    ))}
  </div>
);

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
