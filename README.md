### 1 What is JSX, and why is it used?

**Ans:**

- JSX is an HTML-like markup syntax, but it is not actual HTML.It is mainly used in React to build user interfaces.

### 2 What is the difference between State and Props?

**Ans:**

- Props are data passed from parent component to child component and in is immutable..
- state is mutable data managed within a component.

### 3 What is the useState hook, and how does it work?

**Ans:**

- The useState hook is a built-in hook in React that allows functional components to manage and update state.

### 4 How can you share state between components in React?

**Ans:**

- Using Lifting State Up, Context API

### 5 How is event handling done in React?

**Ans:**

- using onClick={}

```jsx
function Button() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
