const { useState } = React;

export default ({ text }) => {
  const [count, setCount] = useState(1);
  return (
    <div
      className="counter"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      <h1>
        {text} <span>{count}</span>
      </h1>
    </div>
  );
};
