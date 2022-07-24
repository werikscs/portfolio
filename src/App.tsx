import "./styles/_main.scss";

import Routers from "./routes";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Routers />
    </div>
  );
};

export default App;
