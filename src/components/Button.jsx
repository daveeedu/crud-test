import React from 'react';

const withWrapperClass = (WrappedComponent) => {
  return ({ wrapperClass, ...rest }) => {
    return (
      <div className={wrapperClass}>
        <WrappedComponent {...rest} />
      </div>
    );
  };
};

const Button = ({ value, onClick }) => {
  return (
    <button onClick={onClick}>
      {value}
    </button>
  );
};

const WrappedButton = withWrapperClass(Button);

export default WrappedButton;
