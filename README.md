# React Router basics - Bare bone tutorial
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

There are multiple ways to link to another page on your site. Every method has it advantages, disadvantages en use cases. 

### Programmatically

This method of navigation we have already demonstrated in the useHistory hook section of this document. This method is mostly used to change the current location after completing an async method.  

### Link

This component creates accessible navigation for your site. 

#### To

With the "to" attribute you can link to another page on your site. This can be done via a string,  an object or a function. In this tutorial, we've been navigating via a string. Navigation using a object looks like this:

```react
 <Link to= {{
	pathname: "/queries",
	search: "?name=Lisa&age=20",  /* query string you want to pass */
	hash: "#hash",  /* link to an id on the /queryies page */
}}>Object Link: Queries</Link>
```

It's also possible to use a function. This method isn't used that much, but also works:

```react
<Link to={location => ({...location, pathname: "/about"})}>Function Link: about</Link>
```

#### Replace

If you don't want a page to show up in the browser history of a user, you can use the "replace" attribute.

```react
<Link to="/users" replace>Replace history entry</Link>
```

### NavLink

This component is a special version of the Link-component. It mostly used to create navigation bars.

#### activeClassName and activeStyle

These attributes are used to style the link if the link matches the current route. With activeClassName you can pass a class name that needs to be added to the link. If you don't want to use a class, you can use activeStyle, in which you define the styling rules for the component.

```react
<NavLink to="/" activeClassName="active">Current page: activeClassName</NavLink>
<NavLink to="/" activeStyle={{ fontWeight: "bold", color: "#00ffbb" }}>Current page: activeStyle</NavLink>
```



