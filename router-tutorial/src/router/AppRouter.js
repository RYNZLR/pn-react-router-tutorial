import {
    Switch,
    Route
  } from "react-router-dom";

export default  function AppRouter(){


return(
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>

        <Route exact path="/*">
            <Error />
        </Route>
    </Switch>
)
}

function Home() {
    return <h2>Home</h2>;
}


function Error() {
    return <h2>Error</h2>;
}
