# Component

Component is nothing but a javascript function that return markup(JSX) in react.


1. Functional Component

```javascript
function MyButton(){
  return <button>Click Me</button>
}
```

2. Class based component


```javascript
class MyButton extends React.Component{
  render(){
      return <button>Click Me</button>
  }
}
```