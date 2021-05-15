# LAB: RESTy

This is an application built with React. The user can enter a URL (API) they wish to access, as well as select the `REST` method they want to use to access that URL.

## Author: Dar-Ci Calhoun

## Links

- [PR 1 - Phase 1](https://github.com/dcalhoun286/resty/pull/1)
- [PR 2 - Phase 1](https://github.com/dcalhoun286/resty/pull/2)
- [PR 3 - Phase 2](https://github.com/dcalhoun286/resty/pull/3)
- [Deployed Link](https://codesandbox.io/s/cool-haze-6bvfz)

## RESTy - Phase 1 Requirements

Today, we begin the first of a 4-Phase build of the RESTy application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure so that we can progressively build this application in a scalable manner.

The following user/developer stories detail the major functionality for this phase of the project.

- As a user, I expect an easy to read and understandable user interface so that I can use the application intuitively.
- As a user, I want to enter the URL to a REST API and select the REST method to use to access it.
- As a user, I want visual confirmation that my entries and selections are valid so that I have confidence the application will be able to fetch the API data that I've requested.

And as developers, here are the high level development tasks that address the above end user requirements.

- Create a visually appealing site with a Header, Footer, and a large content area
- Create a form that asks for a URL
- Create buttons that let the user choose from the REST methods (`GET`, `POST`, `PUT`, `DELETE`)
- When the form is filled out, and the button is clicked, display the URL and the method chosen

## UML

created with [diagrams.net](https://www.diagrams.net/)

![RESTy UML](assets/resty-uml.png)

## Resources and Collaborators

- [W3schools - HTML Forms](https://www.w3schools.com/html/html_forms.asp)
  - [W3schools - Form Attributes](https://www.w3schools.com/tags/tag_input.asp)
- [ReactJS.org - Forms](https://reactjs.org/docs/forms.html)
- [Jay Beale](https://github.com/jaybeale) helped me get started on wiring up the event handlers and using the `state` object
- [Stack Overflow - Placeholder for dropdown selection](https://stackoverflow.com/questions/44786669/warning-use-the-defaultvalue-or-value-props-on-select-instead-of-setting)
- [W3docs - Requiring a radio button selection](https://www.w3docs.com/snippets/html/how-to-use-the-required-attribute-with-the-radio-input-field.html)
- [Stack Overflow - Debugged React controlled radio buttons not being checked](https://stackoverflow.com/questions/42499495/react-controlled-radio-buttons-not-being-checked)
- [Stack Overflow - Rendering an `array.map()` in React](https://stackoverflow.com/questions/38282997/rendering-an-array-map-in-react)
## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
