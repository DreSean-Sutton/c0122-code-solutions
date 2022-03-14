# HTML

- Skeleton
  - `<!doctype html>`
  - `<html>`
  - `<head>`
      - `<title>`
  - `<body>`
- Resets: create a baseline of styles for your page
- `<link>` element: link external resources to the document
  - CSS
  - Fonts
- Absolute vs Relative Links
  - absolute: full URL including the origin
  - relative: just a relative path to a file / directory
- Tables
  - `<table>`
  - `<thead>`
  - `<th>`
  - `<tbody>`
  - `<tr>`
  - `<td>`

## Attributes

Metadata for an HTML element to modify its behavior. Allow CSS to target elements for styling. Allow JavaScript to query the DOM for elements.

- `src`
- `href`
- `class`
- `id`
- `lang`

- `<script>` element: goes at the bottom of the `<body>` element so that all of the DOM elements created from the source document are available to the JavaScript code.

## Forms

Used to collect information from users through an interface

- Inputs: email, password, checkbox, radio, file, text
- Input elements belong within a form element

# CSS
- it's possible to style elements to look like other elements. use responsibly
- `position` property
  - `static`
  - `fixed`
  - `absolute`
  - `relative`
  - `sticky`
- `float` property
- `display` property
    - block: take up 100% of containing block
    - inline: takes up as much width/height based on size of its content
- pseudo-classes
    - `:focus`
    - `:hover`
    - `:active`
    - `:nth-child()`
- pseudo-elements
    - `::before`
    - `::after`

## The Cascade

- source order
- inheritance
- specificity
- `!important`

## Flexbox

- Layout Classes

## Responsive Web Design

- `@media` queries

## Length Units
- `rem`
- `px`
- `%`
- `vh`
- `vw`

## Loops

- `for`: initialization expression, condition expression, final expression
- `while`
- `for ... in`

### Can contain
- loops
- conditionals
- variables

## Conditional Statements

- to maybe run a block of code

## Data

### Reference

Pass-by-reference. Points to the location of the object in memory

### Primitive

Pass-by-value. Points to the actual value in memory
- null
- numbers
- undefined
- string
- booleans

### Strings
- concatenation: creating a new string by combining two with the `+` or `+=` operator

- Truthy and Falsy values
    - `null`
    - `undefined`
    - `0`
    - `0n`
    - `NaN`
    - `false`
    - `""` (empty string)
- variables: give names to values to use later in a program
- JSON: text based data interchange format
  - send or receive over a network
  - store it to a disk drive
- `localStorage`

## AJAX

- View Swapping
- `XMLHttpRequest`

## APIs

- HTTP

## Functions
- scope:
  - global - available within any function
  - local - only available within the function it was declared in
- callbacks: functions to be called at some point in the future
- methods: a property of an object whose value is a function

### Constructors

## Events

- `addEventListener`
    - `click`
    - `submit`
    - `beforeunload`
    - `DOMContentLoaded`
- `removeEventListener`
- `event` an object. it's a data model of something that happened
  - `target`
- event delegation
  - listen for events on descendent elements
  - bubbling

## DOM

- manipulation: changing attributes or class names on a DOM element
- querying: grab a reference to an element object within a DOM tree
- creation: generate new DOM elements that aren't a part of the source document

# Wireframing

- Figma

# Documentation

## MDN

# Pseudo-coding

# Debugging

- Chrome Dev Tools
- The Console

# Project Management

- Features
- Issues
- Task Lists

# Git (Version Control)

- `git switch`
- `git branch`
- `git status`
- `git commit`
- `git push`
- `git pull`
- `git add`

## Objects

- prototypes: javascript objects can "inherit" properties from other objects
- `this` the object to the left of a dot with a function (method) is called

## Arrays

### Methods

- push: add one or more elements to the end of an array
- pop: remove the last element of an array
- shift: remove the first element of an array
- unshift: adds one or more elements to the beginning of an array
- splice: edit the contents of an array at some index(es)
- slice: return a shallow copy of a section of an array
- includes: return a boolean for the existence of a value in an array
- lastIndexOf: returns the greatest index of a value in an array

## Timers

- `setTimeout`
- `setInterval`

# Professional Presence

- LinkedIn
- Resume
- GitHub

# Algorithms

- variables - remember things or keep track of values
- conditional statements - make decisions
- loops - repeat a series of instructions

- Fisher-Yates Shuffle

# How to be a Junior Dev

- Ask proper questions.
- Be ok with being a beginner.
