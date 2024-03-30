1. What is the difference between Component and PureComponent?
Give an example where it might break my app.

When writing a `regular Component`, the component is refreshed every time 'setState()' is used, even if nothing has changed in the component's state or props. The `PureComponent` is a bit smarter, it takes a quick peek at the current and previous props and state and only refreshes if something actually changed. But, we have to be careful when manipulating objects directly in our props or state with the 'PureComponent' approach, it might miss prop changes and skip refreshing when it should.


2. Context + ShouldComponentUpdate might be dangerous. Why is that?

`ShouldComponentUpdate` doesn't consider context changes. That can lead to inconsistencies between the component's state and the context that encapsulates it.

3. Describe 3 ways to pass information from a component to its PARENT.

One way of passing information from a component to its parent is to receive a function from the Parent and then execute it with the information you want to pass to their parent, so it’ll be executed with the data passed from the child. A second way of doing that is by using a global state management library like Redux, or Context API. A third one could be by triggering an event that the parent are listening to, by using an event listener.

4. Give 2 ways to prevent components from re-rendering.

- Using Pure Component. Pure component are Class extensions that skips re-rendering for the same props and states. Example: `class PureClassComp extends PureComponent { render() {...} }`
- By using `React.memo()` - which is based on shallow state/props comparison.

5. What is a fragment and why do we need it? Give an example where it might break my app.

React Fragment `<></>` is a way of grouping multiple sibling elements without creating an unnecessary parent like a <div> to wrap the items inside, when extra tree nodes aren't needed. It can cause rendering issues, if trying to render a list map since Fragments aren't a proper node tree, and they can't hold information like "key" prop, which is essential for React to manipulate lists of elements.


6. Give 3 examples of the HOC pattern.

A HOC (Higher Order Component) is a component that receives another component as prop. 
Three good examples of HOC in React are Authentication (enable component functionalities after authentication), Theming (by injecting custom styling / theme-based customized personalization), or
Data fetching and Conditional rendering for each fetching state (loading, empty list, data, error states...)

7. What's the difference in handling exceptions in promises, callbacks and async...await?

- Callbacks: Errors are passed as the first argument to the callback function
- Promises: Handling errors with `.catch()` or by rejection `.then(null, rejection)`
- async...await: the use of `try...catch` provides a more synchronous error handling format

8. How many arguments does setState take and why is it async.

`setState` can receive two arguments: the first one is usually an object, and the second one is a callback function (optional). The `setState` is an asynchronous function that can benefit performance by batching state updates, making sure every state manipulation calls to be executed into the same lifecycle all together.


9. List the steps needed to migrate a Class to Function Component.

1 - Rename the class component to use a `function` or `const` (ES6 syntax) instead of extending React.Component Class
2 - Replace this.props for named props args. Also remove the `super(props)`.
3 - Refactor lifecycle methods to useState (instead of this.state, setState) and useEffect hooks (instead of componentDidMount, componentWillUnmount...)
4 - Adjust any class-specific methods or properties to functions.
5 - The `render() { return <>...</> }` method to be replaced by just `return <>...</>` to be put at the end of the function.


10.List a few ways styles can be used with components.

Styled-components (tagged template JS literals), Inline styles (by applying styles directly in the the JSX using the style attribute with object camelCase syntax instead of kebab-case (commom used by css properties), CSS Modules classes inside the JSX className attribute.



11. How to render an HTML string coming from the server.

Use the `dangerouslySetInnerHTML` attribute like  this:
```
  <div
    dangerouslySetInnerHTML={{__html: data}}
  />
```
where `data` is a valid HTML string/document

** Warning: it can lead to XSS attacks, so the use of dangerouslySetInnerHTML is not advised
