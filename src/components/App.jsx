import { useState } from "react";
import styled from "@emotion/styled";

const App = () => {
  const [count, setCount] = useState(0);

  const Paragraph = styled.p`
    text-align: center;
  `;

  const Div = styled.div`
    display: flex;
    justify-content: center;
  `;

  const Button = styled.button`
    color: #fff;
    cursor: pointer;
    background-color: ${(props) =>
      props.primary ? "rgb(27, 124, 146)" : "rgb(154, 152, 152)"};
    border-radius: 0.5em;
    font-weight: bold;
    padding: 1em;
    margin: 1em;
  `;

  return (
    <>
      <Paragraph>Count is {count}</Paragraph>
      <Div>
        <Button onClick={() => setCount((preCount) => preCount + 1)} primary>
          Increment
        </Button>
        <Button onClick={() => setCount((preCount) => preCount - 1)}>
          Decrement
        </Button>
        <Button onClick={() => setCount((preCount) => preCount + 10)} primary>
          Increment by 10
        </Button>
        <Button onClick={() => setCount((preCount) => preCount - 5)}>
          Decrement by 5
        </Button>
      </Div>
    </>
  );
};

export default App;
