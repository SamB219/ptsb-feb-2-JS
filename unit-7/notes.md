
### React
- Created by Facebook
- Is a client-side JavaScript Library
- Quickly render on the page
- Companies transistioning more to React
    -Netflix, Uber, Dropbox, AirBnB
- Works through **Components**

## Rules of JSX
- **Must** Export for it to be used // export on the bottom of file
- **Must** be imported to be used // import from directory
- **Must** be mounted to be used // aka put in a function
- **Must** only return **ONE** JSX Element

# Create a React App
- `npx create-react-app react-app-name`
- **npx create-react-app [your project name]**
    - `index.html`: What is displayed in the browser
    - `App.js`: Main point where components are mounted. This is being rendered within `index.js`



### React Extension
**React Snippets**
dsznajder.es7-react-js-snippets
[docs](https://github.com/ults-io/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md)
- Quick Commands
  - rfce
    - React Functional Component Export
  - rfc
    - React Funcitonal Component (default export)


    # State
- Helps modify data based on a condition
  - ex: 
    - offline/online status
    - session token storage
- Utilizes types of hooks
- Requires to be imported

`import { useState } from 'react'`

## `useState()`
- Structure:
  - `keyword [ variable, function ] = hook(initial value);`
  - The Process:

```js
function useState(startingData) {
  function updateState(newData) {
    startingData = newData;
  }
  return [startingData, updateState]
}
```
# useRef
- is a hook
- values consist and don't cause re-renders of the page.
- returns only one item
    - an object called "current"
- must be imported in with 'react'
```jsx
import { useRef } from 'react'
```

# useEffect()
- Allows us to perform side effects in functional components.
- Accepts two arguments
  - function
  - dependency
    - optional
    - Can denote a specific event to to trigger

```js
useEffect(() => {
  // Runs on every render
});

useEffect(() => {
  // Runs only on the first render
}, []);

useEffect(() => {
  // Runs on first render
  // Runs any time any dependency changes
}, [state]);
```
