import Card, { CardVariant } from "./components/Card";

function App() {
  return (
    <div>
      <Card
        onClick={(num) => console.log("Click", num)}
        width="100px"
        height="100px"
        variant={CardVariant.primary}
      >
        <button>Click</button>
      </Card>
    </div>
  );
}

export default App;
