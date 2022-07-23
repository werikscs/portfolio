import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/projetos"></Route>
      <Route exact path="/contato"></Route>
    </Switch>
  );
};

export default Routers;
