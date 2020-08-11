const GlobalStyle = styled.createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@500&display=swap");
  body {
    background-color: lightblue;
    font-family: "Work Sans", sans-serif;
    margin: 0;
  }
`;

const App = () => {
  const initialState = {
    gridSize: {
      w: 15,
      h: 15,
    },
    velocity: {
      x: 1,
      y: 0,
    },
    direction: "right",
    prevDirection: "right",
    fruit: {
      x: 0,
      y: 0,
    },
    head: {
      x: 0,
      y: 0,
    },
    tailSize: 3,
    trail: [],
    gameOver: false,
    timeout: null,
    victory: false,
  };

  const [state, setState] = React.useState(_.cloneDeep(initialState));

  const StyledApp = styled.div`
    .grid {
      width: ${state.gridSize.w * 64}px;
      height: ${state.gridSize.h * 64}px;
      display: grid;
      grid-template-columns: repeat(${state.gridSize.w}, 1fr);
      grid-template-rows: repeat(${state.gridSize.h}, 1fr);
      grid-auto-flow: row;
      .cell {
        background: black;
        &.snake,
        &.fruit {
          position: relative;
          &:after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size : ${64*5}px ${64*4}px;
            background-image: url("images/snake-graphics.png");
          }
        }

        &.head-right {
          &:after {
            background-position: 100% 0;
          }
        }
        &.head-left {
          &:after {
            background-position: -${64 * 3}px -${64 * 1}px;
          }
        }
        &.head-up {
          &:after {
            background-position: -${64 * 3}px -${64 * 0}px;
          }
        }
        &.head-down {
          &:after {
            background-position: -${64 * 4}px -${64 * 1}px;
          }
        }

        &.tail-right {
          &:after {
            background-position: -${64 * 4}px -${64 * 2}px;
          }
        }
        &.tail-left {
          &:after {
            background-position: -${64 * 3}px -${64 * 3}px;
          }
        }
        &.tail-up {
          &:after {
            background-position: -${64 * 3}px -${64 * 2}px;
          }
        }
        &.tail-down {
          &:after {
            background-position: -${64 * 4}px -${64 * 3}px;
          }
        }
        &.fruit {
          &:after {
            background-position: 0 100%;
          }
        }
        &.body-left-left {
          &:after {
            background-position: -${64 * 1}px -${64 * 0}px;
          }
        }
        &.body-left-up {
          &:after {
            background-position: -${64 * 0}px -${64 * 1}px;
          }
        }
        &.body-left-down {
          &:after {
            background-position: -${64 * 0}px -${64 * 0}px;
          }
        }
        &.body-down-down {
          &:after {
            background-position: -${64 * 2}px -${64 * 1}px;
          }
        }
        &.body-down-left {
          &:after {
            background-position: -${64 * 2}px -${64 * 2}px;
          }
        }
        &.body-down-right {
          &:after {
            background-position: -${64 * 0}px -${64 * 1}px;
          }
        }
        &.body-up-up {
          &:after {
            background-position: -${64 * 2}px -${64 * 1}px;
          }
        }
        &.body-up-right {
          &:after {
            background-position: -${64 * 0}px -${64 * 0}px;
          }
        }
        &.body-up-left {
          &:after {
            background-position: -${64 * 2}px -${64 * 0}px;
          }
        }
        &.body-right-right {
          &:after {
            background-position: -${64 * 1}px -${64 * 0}px;
          }
        }
        &.body-right-down {
          &:after {
            background-position: -${64 * 2}px -${64 * 0}px;
          }
        }
        &.body-right-up {
          &:after {
            background-position: -${64 * 2}px -${64 * 2}px;
          }
        }
      }
    }
  `;

  const setRandomFruit = () => {
    const freeCells = [];
    for (let i = 0; i < state.gridSize.w; i++) {
      for (let j = 0; j < state.gridSize.h; j++) {
        if (!state.trail.find((it) => it.x == i && it.y == j))
          freeCells.push({
            x: i,
            y: j,
          });
      }
    }
    const randomCell = Math.floor(Math.random() * freeCells.length);
    state.fruit.x = freeCells[randomCell].x;
    state.fruit.y = freeCells[randomCell].y;
  };

  const startGame = () => {
    Object.assign(state, _.cloneDeep(initialState));
    setRandomFruit();
    render();
    setState({ ...state });
  };

  const render = () => {
    state.timeout = setTimeout(
      renderFrame,
      ((state.gridSize.w * state.gridSize.h) / state.tailSize) * 10
    );
  };

  const renderFrame = () => {
    if (state.gameOver) return;

    state.prevDirection = state.direction;
    if (state.velocity.x == -1) state.direction = "left";
    else if (state.velocity.x == 1) state.direction = "right";
    else if (state.velocity.y == -1) state.direction = "up";
    else if (state.velocity.y == 1) state.direction = "down";

    state.trail.push({
      x: state.head.x,
      y: state.head.y,
      direction: state.direction,
      prevDirection: state.prevDirection,
      isTail: false,
    });
    state.prevDirection = state.direction;
    if (state.head.x == state.fruit.x && state.head.y == state.fruit.y) {
      state.tailSize++;
      setRandomFruit();
    }
    if (state.trail.length > state.tailSize) state.trail.shift();
    state.trail[0].isTail = true;

    state.head.x += state.velocity.x;
    state.head.y += state.velocity.y;
    if (state.tailSize == state.gridSize.w * state.gridSize.h - 1)
      state.victory = true;
    state.gameOver = Boolean(
      state.head.x < 0 ||
        state.head.x >= state.gridSize.w ||
        state.head.y < 0 ||
        state.head.y >= state.gridSize.h ||
        state.trail.find(
          (it) => it.x == state.head.x && it.y == state.head.y
        ) ||
        state.victory
    );

    render();
    setState({ ...state });
  };
  const keyPress = (e) => {
    switch (e.keyCode) {
      case 37:
        state.velocity = {
          x: -1,
          y: 0,
        };
        setState({ ...state });
        break;
      case 38:
        state.velocity = {
          x: 0,
          y: -1,
        };
        setState({ ...state });
        break;
      case 39:
        state.velocity = {
          x: 1,
          y: 0,
        };
        setState({ ...state });
        break;
      case 40:
        state.velocity = {
          x: 0,
          y: 1,
        };
        setState({ ...state });
        break;
      case 13:
        if (state.gameOver) startGame();
        break;
    }
  };

  React.useEffect(() => {
    startGame();
    window.addEventListener("keydown", keyPress, false);
    return () => {
      clearTimeout(state.timeout);
      window.removeEventListener("keydown", keyPress, false);
    };
  }, []);
  return (
    <StyledApp>
      <GlobalStyle />
      {!state.gameOver && (
        <div className="grid">
          {[...new Array(state.gridSize.w).fill(null)].map((row, i) =>
            [...new Array(state.gridSize.h).fill(null)].map((cell, j) => (
              <div
                className={`cell${
                  state.trail.find((it) => it.x == j && it.y == i)
                    ? state.trail.find((it) => it.x == j && it.y == i).isTail
                      ? ` snake tail-${state.trail.find((it) => it.x == j && it.y == i).direction}`
                      : ` snake body-${
                          state.trail.find((it) => it.x == j && it.y == i)
                            .prevDirection
                        }-${
                          state.trail.find((it) => it.x == j && it.y == i)
                            .direction
                        }`
                    : state.head.x == j && state.head.y == i
                    ? ` snake head-${state.direction}`
                    : state.fruit.x == j && state.fruit.y == i
                    ? " fruit"
                    : ""
                }`}
                key={j}
              ></div>
            ))
          )}
        </div>
      )}
      {state.gameOver && (
        <div className="gameOver">
          Game Over {state.victory ? "you win " : "you lost"} <br /> press ENTER
          to Play Again
        </div>
      )}
    </StyledApp>
  );
};

export default App;
