// InputComponent.jsx

import React from 'react';
import PropTypes from 'prop-types';

const InputComponent = ({ label, placeholder, onChange }) => {
  return (
    <div className="form-group">
      <label className="font-text block ">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-1 w-full border rounded-md bg-transparent text-white border-ffe4ce p-5"
        style={{ width: '27.75rem' }}
        onChange={onChange}
      />
    </div>
  );
};

  InputComponent.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputComponent;
