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