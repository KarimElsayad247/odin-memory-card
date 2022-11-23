import Header from "./components/Header";
import CardsContainer from "./components/CardsContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header score="3" bestScore="5" />
      <CardsContainer />
    </div>
  );
}

export default App;
