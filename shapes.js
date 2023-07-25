const container = document.querySelector(`#root`);

const Circle = ({ color }) => {
  const circleShape = {
    backgroundColor: color,
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    margin: "15px",
  };

  return <div style={circleShape}></div>;
};

const Square = ({ color }) => {
  const squareShape = {
    backgroundColor: color,
    width: "100px",
    height: "100px",
    margin: "15px",
  };

  return <div style={squareShape}></div>;
};

const App = () => {
  const [shapes, setShapes] = React.useState([]);

  const getRandomColor = () => {
    const getRandomValue = () => Math.floor(Math.random() * 255);
    const red = getRandomValue();
    const green = getRandomValue();
    const blue = getRandomValue();
    return `rgb(${red}, ${green}, ${blue})`;
  };

  const generateShapes = () => {
    const newShapes = [];
    for (let i = 0; i < 3; i++) {
      newShapes.push({
        id: `circle-${i}`,
        type: "circle",
        color: getRandomColor(),
      });
      newShapes.push({
        id: `square-${i}`,
        type: "square",
        color: getRandomColor(),
      });
    }
    setShapes(newShapes);
  };

  React.useEffect(() => {
    generateShapes();
  }, []);

  const changeColors = () => {
    const updatedShapes = shapes.map((shape) => ({
      ...shape,
      color: getRandomColor(),
    }));
    setShapes(updatedShapes);
  };

  return (
    <>
      <div>
        {shapes.map(({ id, type, color }) => (
          <div key={id}>
            {type === "circle" ? (
              <Circle color={color} />
            ) : (
              <Square color={color} />
            )}
          </div>
        ))}
      </div>
      <button onClick={changeColors}>Color Clickey</button>
    </>
  );
};

const root = ReactDOM.createRoot(container);
root.render(<App />);
