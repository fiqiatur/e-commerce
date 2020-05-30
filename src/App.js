import React from "react";
import { Route, Switch,  } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";

const HatsPage = () => <h1>Hats Page</h1>;

function App() {
   return (
      <div>
         <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/hats" component={HatsPage} />
         </Switch>
      </div>
   );
}

export default App;
