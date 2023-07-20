import React from 'react';
import PropTypes from 'prop-types';
import css from './notification.module.css';

export const Notification = ({ message }) => (
  <div>
    <p className={css.message}>{message}</p>
  </div>
);
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
