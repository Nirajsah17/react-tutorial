# what is state 

State is a way to store and manage dynamic information that influences what the UI displays.
State is local to the component and is managed within the component itself, allowing the component to re-render and update the UI whenever the state changes.

## Key characteristics

* State is local to the component and cannot be accessed or modified directly by other components. It is encapsulated within the component that defines it.
* Unlike props, which are read-only and passed down from parent components, state can change over time. These changes can trigger re-renders of the component to reflect the updated state.

* State is managed internally within the component using specific methods or hooks provided by React. In class components, state is managed using this.setState. In function components, state is managed using the useState hook.


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