# Advance Hooks


## How would you implement a custom hook ?

* Encapsulate reusable logic.


**Example **


```javascript
import {useState, useEffect} 'react'

const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

const Component = () => {
  const width = useWindowWidth();
  return <p>Window width: {width}px</p>;
};
```

## What is `useRef`, and how is it different from `useState`?

* `useRef` holds a mutable reference that doesn't trigger re-renders.

```javascript
const inputRef = useRef(null);
const focusInput = () => inputRef.current.focus();
```

## How would you handle API calls with hooks?

```javascript
const useFetch = (url) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then(setData);
  }, [url]);
  return data;
};

```

## How do you handle errors in hooks?

* Use `try-catch` inside `useEffect` or custom hooks.