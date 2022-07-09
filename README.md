# What was done?

Implementation of the “Simple CRUD application with API implementation” using TypeScript and React, This application let the users see post and and create one or either modify or delete a post (but api is kinda fake and we can not see our modification)

# Projects instruction
You can find the instrcutions inside of "instruction" folder as a pdf file.

# Design

 used React.js and typescript and I also tried to use the TDD approach but due to time limits, I just implement few tests. I used functional components and hooks like useState, useEffect, useCallback. and for api calls i did create Costum hook so or code would be clean and neat, for React UI Component Library, MUI is used with emotion for styling, and project is fully resposive to different screen sizes. I also implement some end-to-end tests with Cypress to test important parts of the project. for reducing complexity of project i did not use any state management library like redux.

I used GitHub and I create different branches for optional features. I also create PRs and merge branches with squashing.


# Structure
The followings are the directories of this project:

`src/component` is for general purpose components of the application, 
`src/hooks` contains our custom hooks for api calls,
`src/layout` contains our general layout for application,
`src/pages` contains our pages ,
`src/provider` contains our mui theme provider ,



- main technology stack for this project are:
    * [React](https://reactjs.org/) library for building ui
    * [TypeScript](https://www.typescriptlang.org/) Used typed syntax
    * [Formik](https://formik.org/) labrary for handling forms 
    * [Cypress](https://www.cypress.io/) end to end testing
    * [MUI](https://mui.com/) UI frameWork
    * [react-router-dom](https://reactrouter.com/) for routing between pages.

# How to run

> _NOTE: requires node
>
Go to the project directory
```bash
cd setvi-react-test
```

Install dependencies using: 
```bash
yarn
```
Run the project using: 
```bash
yarn start
```
The project is running in:  
http://localhost:3000


# Thing's I learn
There are some things that I learned during this sample project:
* v6 of react router


# Further improvements
Because of time limits, I could not implement all of the features, but there are some things that if I had more time, I would do:


## Representation
* improves the overall UI of the system.
* DRY-ing create and update form so it doesnt repeat
* i18n and locale.
* add more tests

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

