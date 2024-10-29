import Header from "./components/Header";
import Modal from "./components/Modal";
import { Images } from "./ImagesUrl";
import "./App.css";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const reactEssentials = [
    {
      image: Images.Components,
      header: "Components",
      text: "The core UI building block - compose the user interface by combining multiple components.",
    },
    {
      image: Images.Jsxui,
      header: "JSX",
      text: "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.",
    },
    {
      image: Images.Config,
      header: "Props",
      text: "Make components configurable (and therefore reusable) by passing input data to them.",
    },
    {
      image: Images.StateManagement,
      header: "State",
      text: "React-managed data which, when changed, causes the component to re-render & the UI to update.",
    },
  ];

  const EXAMPLES = {
    Components: {
      title: "Components",
      description:
        "Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.",
      code: `
  function Welcome() {
    return <h1>Hello, World!</h1>;
  }`,
    },
    JSX: {
      title: "JSX",
      description:
        "JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).",
      code: `
  <div>
    <h1>Welcome {userName}</h1>
    <p>Time to learn React!</p>
  </div>`,
    },
    Props: {
      title: "Props",
      description:
        "Components accept arbitrary inputs called props. They are like function arguments.",
      code: `
  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }`,
    },
    State: {
      title: "State",
      description:
        "State allows React components to change their output over time in response to user actions, network responses, and anything else.",
      code: `
  function Counter() {
    const [isVisible, setIsVisible] = useState(false);
  
    function handleClick() {
      setIsVisible(true);
    }
  
    return (
      <div>
        <button onClick={handleClick}>Show Details</button>
        {isVisible && <p>Amazing details!</p>}
      </div>
    );
  }`,
    },
  };

  const selectHandler = (content) => {
    if (content == "Components") setSelectedTopic("Components");
    else if (content == "JSX") setSelectedTopic("JSX");
    else if (content == "Props") setSelectedTopic("Props");
    else setSelectedTopic("State");
  };

  return (
    <>
      <Header />
      <main>
        <ul className="react-basic">
          {reactEssentials.map((x) => (
            <li key={x.header}>
              <Modal image={x.image} header={x.header} text={x.text} />
            </li>
          ))}
        </ul>
      </main>
      <h3>Examples</h3>
      <div>
        {/* when we want to pass custom arguments to an event handler,
         we use anonymous functions as now selectHandler() will not be executed while html content is parsed
         only this arrow function will be defined, which will get executed when onClick event is triggered 
         which in turn execute the selectHandler() and this way we can pass custom args to function 
         and control when we want them to be executed 
         i.e by wrapping fn with another fn*/}
        <button onClick={() => selectHandler("Components")}>Components</button>
        <button onClick={() => selectHandler("JSX")}>JSX</button>
        <button onClick={() => selectHandler("Props")}>Props</button>
        <button onClick={() => selectHandler("State")}>State</button>
      </div>

      <section>
        {!selectedTopic ? (
          <p>Please select a topic</p>
        ) : (
          <>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </>
        )}
      </section>
    </>
  );
}

export default App;
