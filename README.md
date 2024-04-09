# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)




## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![img](./screenshot/Frontend%20Mentor%20Intro%20component%20with%20sign%20up%20form.png)

### Links

- Solution URL: [Solution URL here](https://github.com/Karan551/Front_end_mentor_Intro_Component)
- Live Site URL: [ Live site URL here](https://karan551.github.io/Front_end_mentor_Intro_Component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow




### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1 class="main-heading">Learn to code by watching others </h1>
```
```css
.container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 1rem 2.5rem;

}
```

```js
function validEmail(email) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
```


### Useful resources

- [Resource 1](https://developer.mozilla.org/en-US/docs/Web/CSS) - This helped me very much to  understand the basic concept of CSS And JS. I really liked this pattern and will use it going forward.
- [Resource 2](https://javascript.info/browser-environment) - This is an amazing article which helped me finally to maniuplate DOM. I'd recommend it to anyone still learning this concept.



