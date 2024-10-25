import Header from "./components/Header";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const reactEssentials = [
    {
      image: "",
      header: "xyz",
      text: "",
    },
    {
      image: "",
      header: "abc",
      text: "",
    },
    {
      image: "",
      header: "uuu",
      text: "",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <ul>
          {reactEssentials.map((x) => (
            <li key={x.header}>
              <Modal image={x.image} header={x.header} text={x.text} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
