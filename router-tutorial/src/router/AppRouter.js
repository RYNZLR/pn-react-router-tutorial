import {
    Switch,
    Route
} from "react-router-dom";

import {Home, About, User, CreateUser, Parameters, Queries, Error} from '../views/viewImports';


export default function AppRouter(){

return(
    <Switch>

        {/* Routing returns a single view */}
        <Route exact path="/about" component={About} />

    

        {/* Routing returns a single view matching one of the paths */}
        <Route exact path={["/", "/home", "/root"]} component={Home} />



        {/* When to use exact */}
        <Route exact path="/users" component={User} />
        <Route path="/users/create" component={CreateUser} />



        {/* Routing multiple views */}
        <Route path="/group">
            <Home/>
            <About/>
        </Route>



        {/* Routing using parameters */}
        <Route path="/params/:id/:text" component={Parameters} />



        {/* Routing using queries */}
        <Route path="/queries" component={Queries} />



        {/* Wildcard */}
        <Route path="/*" component={Error} />



    </Switch>
)
}
