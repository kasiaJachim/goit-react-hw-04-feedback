import React from 'react';
import PropTypes from 'prop-types';
import css from './notification.module.css';

const Notification = ({ message }) => (
  <div>
    <p className={css.message}>{message}</p>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
export default Notification;