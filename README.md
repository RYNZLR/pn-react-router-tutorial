# React Router - Bare bone tutorial
In this repository you will find all the code related to the React Router tutorial. For each step there is a branch available with code related to the title.

## Step 0 - Creating a React app

The first step in this React Router tutorial is creating a new React app. In case you already have a project, you can skip this step.


```bash
npx create-react-app router-tutorial
```

Go the directory you just creating and run the application. Check that a React app is now running on http://localhost:3000.

```bash
cd router-tutorial # go to the root of the project
npm start # starts the app
```

## Step 1 - Installing the React Router package
Now that we have a React app, we will install the React Router package. You can find more info about this package on https://www.npmjs.com/package/react-router-dom. 

### Installing the package

Install the package with the following command:
```bash
npm i react-router-dom
```
Make sure you execute this command in the root of your React app (for me, that's "router-tutorial" directory).

### Setting up the Router class

You can choose to use your own directory structure for your components, but I always use the following:

- public
- src
  - router: contains routing logic
  - views: contains all different "pages" in the app (home, about us, ...)
  - components: contains child components of views

In order to separate the functionality as much as possible we will create the "AppRouter" class.  For me, this class will be in src/router. This class is responsible for passing the right pages when a users browses to a certain page.

In our App.js we will use this component in order to be able to go the homepage when we browse to  http://localhost:3000/ or go to an error page when we browse to  http://localhost:3000/gibberish.

### Result

After this step you should have:

- React Router installed
- Set up a folder structure you prefer
- Used routing for the first time

## Step 2 - Adding routes
Creating routes with React Router is easy! When you have a Switch-component with multiple Routes, it will return the first match. Keep this in mind: because this can lead to the wrong component being returned if you put your links in the wrong order. An other option is using the "exact" keyword before setting the path, so that the switch will only match if the path is an exact match.

A basic route can be defined by putting the following inside a Switch-component:

```react
import {
    Switch,
    Route
} from "react-router-dom";

...

<Switch>
    <Route exact path={["/", "/home", "/root"]} component={Home} /> 
    <Route exact path="/about" component={About} />
</Switch>
```

For each route you specify a/multiple path(s) and a component that that route will link to. If you want to create a 404-page for when a specific route can't be found, you can use the *-wildcard. This route must be put at the end of the switch statement and looks may look like this:

```react
<Route path="/*" component={Error} />
```

But what if you want to use URL parameters and query strings?  Then you will need to use some build-in hooks from React Router.

### Build-in hooks

Some of the most used hooks are: useParams, useLocation and useHistory. We will go over these in this section.

#### useParams

The useParams hook is used to access the parameters in a route. An example of this is demonstrated in the Parameters-component. This component is rendered when the user visits the following route:

```react
/params/:id/:text
```

In this route we have defined two parameters: id and text. In the Parameters-component we can access these parameters by doing the following:

```react
import React from 'react';
import {
    useParams
} from "react-router-dom";

export default function Parameters(){

    const { id, text } = useParams();
    ...
    
}
```

The values of these parameters are passed in the same order as the route.

#### useLocation

This hook keeps track of the current URL (=location). With this hook you can also extract query strings via the following custom hook:

```react
function useQuery() {
    return new URLSearchParams(useLocation().search);
}
```

This custom hook can be used in the following way to retrieve the query strings from the URL:

```react
export default function Queries(){

    const query = useQuery();

    return(
        <main>
            <h1>Queries</h1>
            <p><strong>Name-querystring: </strong> {query.get("name")}</p>
            <p><strong>Age-querystring: </strong> {query.get("age")}</p>
        </main>
    )
}
```

#### useHistory

The useHistory hook let's you read and manipulate the history instance. This hooks enables you to navigate to a page programmatically by pushing a route in the history instance.

```react
import React from 'react';
import { useHistory } from "react-router-dom";

export default  function Home(){

    const history = useHistory();

    function goToAbout(){
        history.push("/about");
    }

    return(
        <main>
        <h1>Home</h1>
        <p onClick={goToAbout}>Click me to go the about!</p>
        </main>
    )
}
```


## Step 3 - Linking to pages
