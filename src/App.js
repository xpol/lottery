import './App.css';

import LotteryViewContainer from "./containers/LotteryViewContainer";
import DrawContainer from "./containers/DrawContainer";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


function App() {
  return (
      <Router>
          <div>
              <Switch>
                  <Route exact path="/draw">
                      <DrawContainer />
                  </Route>
                  <Route exact path="/configure">
                      <LotteryViewContainer />
                  </Route>
                  <Route path="*">
                      <Redirect to={"/configure"} />
                  </Route>
              </Switch>
          </div>
      </Router>
  );
}

export default App;
