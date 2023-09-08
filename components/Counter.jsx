import variables from "../variables";

const { useState } = React;

const StyledCounter = styled.div`
  user-select: none;
  cursor: pointer;
  font-size: 30px;
  span {
    color: ${variables.primaryColor};
  }
`;

export default ({ text }) => {
  const [count, setCount] = useState(1);
  return (
    <StyledCounter
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {text} <span>{count}</span>
    </StyledCounter>
  );
};
