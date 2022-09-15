import React from "react";

const Counter = (props) => {
  const { value, id } = props;

  const formatValue = () => {
    return value === 0 ? "empty" : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += value === 0 ? "warning" : "primary";

    return classes;
  };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBadgeClasses()}>{formatValue()}</span>
      <button
        className="btn btn-sm btn-primary m-2"
        onClick={() => props.onIncrement(id)}
      >
        +
      </button>
      <button
        className="btn btn-sm btn-primary m-2"
        onClick={() => props.onDecrement(id)}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m2"
        onClick={() => props.onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
