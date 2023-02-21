export const Counter = ({ count, increment, decrement, ...props }) => {
  return (
    <div className="count-wrap">
      <span className="count">{count}</span>
      <div>
        <button onClick={increment} className="increment-btn">
          +
        </button>
        <button onClick={decrement} className="decrement-btn">
          -
        </button>
      </div>
    </div>
  );
};
