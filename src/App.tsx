import "./styles/_main.scss";

import Routers from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routers />
    </div>
  );
}

export default App;
