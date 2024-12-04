# Hooks

Hooks are functions that let you use state, lifecycle methods, and other React features in functional components without writing class components

**Example**


## General rule for react hooks

* Only call hooks at the top level (not inside loops, conditions, or nested functions).
* Only call hooks in React functional components or custom hooks.

 But Why ?

  ans - This ensures consistent state management across renders.

## `useState` Hooks

```javascript

import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};

```


### `useEffect` Hooks

* Handles side effects like data fetching, subscriptions, and DOM manipulations.

```javascript
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]); // Runs only when count changes.
```

* Controls when the effect runs. If empty (`[]`), the effect runs once after the first render.
* If forgot to add `[]` , it causes Potential memory leaks, especially for subscriptions or intervals.

### `useContext`

* Access values from a React Context.

```javascript
const ThemeContext = createContext('light');
const theme = useContext(ThemeContext);

```

## `useReducer` Hooks

`useReducer` is better for complex state logic or when the next state depends on the previous state.


```javascript
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducer, { count: 0 });
```

## Explain the difference between `useMemo` and `useCallback`.


* `useMemo` memoizes a computed value.
* `useCallback` memoizes a function.

```javascript
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
const memoizedCallback = useCallback(() => doSomething(a), [a]);
```
