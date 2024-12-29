# Workshop-recipes-app-rn
A simple app to master the basics of React Native (Navigation and basic components)

Please add a little star if you liked our repo, it will help us to get better and to create more content for you to learn with :)

Created by [@Vincent-DARIBO](https://github.com/Vincent-DARIBO) and [@taniabezancon](https://github.com/taniabezancon).

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info

This app brings together all the basic principles of creating an application. We created this application to apply our knowledge of React Native.
You can find the concepts of:
- Navigation
- UI/UX

## Technologies
Project is created with:
* React Native/Expo
* React Navigation -> Navigation
* React Native Paper -> Components and Theming
      
## Setup

### Prerequisites
* Install node
      *  with CLI -> https://nodejs.org/en/download/package-manager/
      *  with graphic interface -> https://nodejs.org/en/download/
* Install expo with this command -> npm install --global expo-cli

### Run the project
```
$ open a terminal
$ clone the repository in your computer using `git clone git@github.com:Vincent-DARIBO/Workshop-recipes-app-rn.git`
$ cd ../React-Native-training-app
$ yarn install
$ yarn start
```
## Workshop I: Test your mobile app with Jest

1. Installation de Jest
	* Create a basic component: https://reactnative.dev/docs/tutorial 
	* https://www.digitalocean.com/community/tutorials/react-react-native-basic-components	 	
	* Create a card simple tutorial: https://reactnativeelements.com/docs/2.3.2/card	 	

      * Install Node.js and NPM: Jest is a JavaScript library that runs on Node.js. So make sure to install the latest version of Node.js and NPM on your         computer if you haven't already. You can download Node.js from the official website https://nodejs.org/en/.
      
      * ```npm install --save-dev jest```
      
      * ```npm run test```
      
## Testing React Native Functions with Jest

Here's a general outline of how you can test a React Native function with Jest:

1. **Install Jest and its dependencies:** First, you need to install Jest and its dependencies. You can do this by running the following command in your terminal:

      * npm install --save-dev jest @testing-library/react-native react-test-renderer

2. **Create a test file:** Create a test file for the function you want to test. The file should be located in the same directory as the component and have the suffix `.test.js`.

3. **Import the function:** In the test file, import the function you want to test. You can use the `require()` function or the ES6 `import` statement to do this.

4. **Write test cases:** Write test cases for the function. A test case is a function that calls the function you want to test with different input values and asserts that the output is correct. You can use the Jest `test()` function or `it()` function to create a test case. For example:

```javascript
import { myFunction } from './myFunction';

test('myFunction returns the correct output', () => {
  const input = 'hello';
  const output = myFunction(input);
  expect(output).toEqual('hello world');
});
```

## Testing React Native Components with Jest

 * Here is a great example to follow to test your component: https://www.browserstack.com/guide/unit-testing-of-react-apps-using-jest

## Testing React Native Hooks with Jest
  * Here is a great example to follow to test your hook: https://www.toptal.com/react/testing-react-hooks-tutorial

## Testing React Native User interaction with Jest

Here's an example=

```

import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import App from './App';

test('changes text when button is pressed', () => {
  const { getByText } = render(<App />);

  const button = getByText('Press me');
  const text = getByText('Hello, World!');

  fireEvent.press(button);

  expect(text).toHaveTextContent('Button pressed!');
});

