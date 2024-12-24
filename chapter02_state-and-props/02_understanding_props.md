# Props

In React, props (short for "properties") are a way to pass data from one component to another. Props allow you to make your components more dynamic and reusable by accepting inputs and rendering different outputs based on those inputs.

## Key points

1. **Unidirectional Data Flow**: Props are read-only, meaning that data flows from the parent component to the child component. The child component cannot modify the props it receives.

2. **Passing Data**: Props are passed to a component via HTML attributes when the component is rendered.

3. **Type**: Props can be of any data type, including strings, numbers, objects, arrays, functions, and even other React elements.

**Example:**


### Parent Component

```javascript
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const message = "Hello from Parent!";

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent greeting={message} />
    </div>
  );
}

export default ParentComponent;

```

## Child Component

```javascript
import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{props.greeting}</p>
    </div>
  );
}

export default ChildComponent;

```

* We can also set default values for props using the `defaultProps` property.

## Child Component

```javascript
import React from "react"
import propTypes from "prop-types"

function ChildComponent({greeting, count}) {
  return (
    <div>
      <p>{greeting}</p>
      <p>Count : {count}</p>
    </div>
  )
}



ChildComponent.defaultProps = {
  greeting:"Hello I am default one",
  count : 0
}

ChildComponent.propTypes ={
  greeting: propTypes.string,
  count: propsTypes.number
}
```

## Parent Component 

```javascript
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  return (
    <div>
      <h1>Parent Component</h1>
      {/* No props passed, so default props will be used */}
      <ChildComponent />
      {/* Passing custom props */}
      <ChildComponent greeting="Hello from Parent!" count={5} />
    </div>
  );
}

export default ParentComponent;
```
* Default props provide a way to ensure that your components have sensible fallback values, making them more flexible and less error-prone.