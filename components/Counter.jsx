const { useState } = React;

export default () => {
  const [count, setCount] = useState(1);

  return (
    <div
      className="counter"
      onClick={() => {
        setCount(count + 1);
      }}
    >
      <h1>this is a counter {count}</h1>
    </div>
  );
};
