import {
    Switch,
    Route
} from "react-router-dom";

import {Home, About, Parameters, Queries, Error} from '../views/viewImports';


export default function AppRouter(){

return(
    <Switch>

        <Route exact path={["/", "/home", "/root"]} component={Home} />

        <Route exact path="/about">
            <Home/>
            <About/>
        </Route>

            
        <Route exact path="/params" component={Parameters} />

        <Route exact path="/queries" component={Queries} />

        <Route exact path="/*" component={Error} />
    </Switch>
)
}
