import React from 'react';
import PropTypes from 'prop-types';

import './fieldArea.scss';

/**
 * A textarea to be used inside a form : label and input
 */
const FieldArea = ({
  identifier,
  placeholder,
  label,
  type,
  value,
  changeField,
}) => {
  const handleChange = (event) => {
    const { value: inputValue, name } = event.target;
    changeField(name, inputValue);
  };

  return (
    <div className="field">
      <label
        className="label"
        htmlFor={identifier}
      >
        {label}
      </label>
      <textarea
        autoComplete="off"
        className="input"
        id={identifier}
        placeholder={placeholder}
        name={identifier}
        type={type}
        value={value}
        onChange={handleChange}
        cols="30"
        rows="10"
      />
    </div>
  );
};

FieldArea.propTypes = {
  /** identifier for the input : used both for name and id => must be unique */
  identifier: PropTypes.string.isRequired,
  /** text used as placeholder */
  placeholder: PropTypes.string.isRequired,
  /** text used as label */
  label: PropTypes.string.isRequired,
  /** type of the input */
  type: PropTypes.string,
  /** text used as value for the input */
  value: PropTypes.string,
  /** called when onChange event is received by the input, two parameters :
   * - identifier
   * - new value
   */
  changeField: PropTypes.func.isRequired,
};

FieldArea.defaultProps = {
  type: 'text',
  value: '',
};

export default FieldArea;
