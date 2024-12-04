# Handling Events

Handling events in React is quite similar to handling events in regular **HTML**, but there are some syntax differences and best practices to follow. In React, events are typically handled using camelCase syntax (e.g., `onClick` instead of `onclick`), and you usually pass a function as the event handler.


## Basic event handling


**Example**


```javascript
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // state

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount(count + 1)} aria-label="Increment count">
        Increment
      </button>
    </div>
  );
}

export default Counter;

```

## Passing Arguments to Event Handlers


**Example**

```javascript
import React, { useState } from 'react';

function ArgumentHandlerComponent() {
  const [count, setCount] = useState(0);

  // Event handler function with an argument
  const handleIncrement = (value) => {
    setCount(count + value);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => handleIncrement(1)}>Increment by 1</button>
      <button onClick={() => handleIncrement(5)}>Increment by 5</button>
    </div>
  );
}

export default ArgumentHandlerComponent;
```

## Preventing Default Behavior


**Example**


```javascript
import React from 'react';

function FormComponent() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    alert('Form submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter something" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;

```

## Event Object

React automatically passes an event object to your event handler function. This object contains information about the event that occurred.


**Example**


```javascript
import React from 'react';

function EventObjectComponent() {
  const handleClick = (event) => {
    alert(`Button clicked at X: ${event.clientX}, Y: ${event.clientY}`);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default EventObjectComponent;

```

## Synthetic Events

React uses a pooling mechanism for events to improve performance. This means that the event object is reused and nullified after the event handler has been called. If you need to access event properties asynchronously, you should store the necessary information in a variable.


**Example**


```javascript
import React from 'react';

function SyntheticEventComponent() {
  const handleClick = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    setTimeout(() => {
      alert(`Button clicked at X: ${x}, Y: ${y}`);
    }, 100);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default SyntheticEventComponent;
```

> Note : Remember to use camelCase for event names and to handle the event object carefully, especially when dealing with synthetic events.