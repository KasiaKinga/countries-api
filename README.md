# Responsive web app to display countries using API

<img src="./countries.gif" />

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents
- [Overview](#overview)
  - [Users are able to](#users-are-able-to)
- [Getting Started](#getting-started)
  - [Executing Program](#executing-program)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Users are able to:
- [x] See all countries from the API on the homepage
- [x] Search for a country using an `input` field (without hitting enter)
- [x] Filter countries by region
- [x] Click on a country to see more detailed information on a separate page


## Getting Started

### Executing Program
- To test this app locally, fork and clone this repo 
- Install all dependencies by running: `npm install`
- Start the app by running: `npm start`  
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## My process

### Built with
- [React](https://reactjs.org/) - JS library
- [Semenatic UI React](https://react.semantic-ui.com/) - For styles

### What I learned 
- enhancing accessibility by using Semantic-UI and associating the label with the input by adding "htmlFor" props and passing in the corresponding input's id
```jsx
<Form.Field>
  <label htmlFor="searchBar">{props.title}</label>
  <input
    id="searchBar"
    type="text"
    value={...}
    onChange={...}
  />
</Form.Field>
```
- using lodash debounce to delay search after user starts typing (as opposed to triggering at every character) 
```jsx
 const delaySearchingForCountry = (term) => {
    const debounce = _.debounce(() => {
      setStateWithSearchTerm(term);
    }, 500);

    debounce();
  };
```
- writting components that are reusable in other context
- handling errors and loading states

### Continued development
- [ ] Click through to the border countries on the detail page
- [ ] Toggle the color scheme between light and dark mode

## Author 
- [Kasia Gierat](https://www.linkedin.com/in/kasia-gierat/)

## Acknowledgments
Thank you [Conor Hawes](https://github.com/chawes13) for helping me out on this project by providing detailed feedback on things which needs improvement. This was a very valuable lesson 🙌



