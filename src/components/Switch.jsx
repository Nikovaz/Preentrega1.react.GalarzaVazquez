import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/switch.module.scss';

const Switch = ({ checked, setChecked }) => {
  return (
    <label className={styles.switch}>
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={() => setChecked(!checked)} 
      />
      <span className={styles.slider}></span>
    </label>
  );
};

Switch.propTypes = {
  checked: PropTypes.bool.isRequired,
  setChecked: PropTypes.func.isRequired,
};

export default Switch;
