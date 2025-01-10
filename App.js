// Importing necessary libraries
import React from "react";
import ReactDOM from "react-dom/client";

// **React Element**
// React.createElement => Object => On rendering => HTML-Element
const dummyElement = <span>React Element</span>;
const headingElement1 = React.createElement("h1", { id: "heading" }, "Here we start!");

const headingElement2 = (
  <h1 className="Heading2">
    {dummyElement} {/* Inserting one React element into another */}
    The element 2
  </h1>
);
console.log(headingElement2);

// **JSX (JavaScript XML)**
// JSX => Transpiled to React.createElement => JS Object => HTML-Element
// Note: JSX is not HTML in JS and is not part of React. It's HTML/XML-like syntax.

const jsxHeading = (
  <h1 id="heading">
    Namaste from JSX
  </h1>
); 
// Important:
// 1. JSX is not understandable by the JS Engine directly as it can only understand EcmaScript (pure JavaScript).
// 2. JSX must be transpiled (e.g., using Babel) into JavaScript code that the JS Engine can execute.
// 3. Parentheses are mandatory for multiline JSX code for proper parsing by Babel.
// 4. For single-line JSX, parentheses are optional.

console.log(jsxHeading);

// **Role of Parcel**
// Parcel is a bundler that handles the following:
// 1. Transpiling JSX into JavaScript code using Babel before it reaches the JS Engine.
// 2. Babel: It acts as a JavaScript compiler that converts modern JavaScript and JSX into browser-compatible code.
// 3. Optimizing the code and bundling it for the browser to understand.
// 4. Simplifies the development process by managing these tasks automatically.
// 5. Parcel also supports features like Hot Module Replacement (HMR) for faster development.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading); 
// Note: root.render() can understand JSX, transpile it, and render it into the DOM.

// **React Components**
// React supports two types of components: Class-based (old) and Functional (modern).

// React Functional Components:
// Convention: Component names must start with a capital letter.
const HeadingComponent1 = () => {
  return <h1>The Functional Component: 1</h1>;
}; // A simple JavaScript function returning a React element.

// Functional components are just JavaScript functions that return a React element.
// Shorthand syntax for Functional Components:
const HeadingComponent2 = () => <h1>The Functional Component: 2</h1>;

const HeadingComponent3 = () => (
  <div id="container">
    {/* Component Composition: Nesting components inside one another */}
    <HeadingComponent1 />

    {/* Embedding JavaScript expressions inside JSX using curly braces */}
    {console.log("Here I am! 🙋‍♂️")}

    {/* Prevents Cross-Site Scripting (XSS): JSX sanitizes injected code */}
    {headingElement2} {/* Embedding a React element inside a component */}

    <h1>The Functional Component: 3</h1>
  </div>
);

// Rendering a React Component:
// Components can't be directly rendered using root.render() as it works with React elements.
// Wrap the component in JSX syntax for rendering.
root.render(<HeadingComponent3 />);
