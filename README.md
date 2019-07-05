
##  Player Archive Test

I decided to use `React v16.8` to give React Hooks a try. To limit the number of dependencies for such a small project, I used

- **axios** for HTTP calls,
- **aphrodite** for CSS-in-JS styling

in addition to the libraries provided by **Create React App**. 


##  Project Organisation

* `/src`
  * `components`: main presentational and logical components, views and view-models
  * `models`: data models from json endpoints
  * `utilities`: custom utility functions and custom hooks
  * `index.js`: entry point


##  Components Architecture

* `HomeScreen` > `ThemeProvider` > `Container` > `ContentCard`
    * `PlayerArchivePageContainer` > `PlayerArchivePage`
        * `PlayerSearchForm`
        * **IF** search has been made:
            * `PlayerNotAvailable`
            * **XOR**
            * `PlayerDetailsContainer` > `PlayerDetails` > `PlayerInfoLine`


##  Test Architecture

Two components are tested before building the project. The first one is the `HomeScreen`, which is tested to see if the application starts and renders without failure, and the second one is the `PlayerArchivePageContainer` to check if app responds accordingly to three different player profiles provided.


##  How to Run Locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm install`

Installs all dependencies listed under `package.json`.

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
