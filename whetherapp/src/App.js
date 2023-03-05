import { WhetherProvider } from "./context/WhetherContext";
import "./App.css";
import Container from "./components/Container";
function App() {
  return (
    <>
      <WhetherProvider>
        <Container />
      </WhetherProvider>
    </>
  );
}

export default App;
