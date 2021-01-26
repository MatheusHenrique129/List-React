//JSX - sintax de escrer html com js
import "./App.css";
import { useState } from "react";

function Header(props) {
  return (
    <header className="header">
      <p>Hello Wold..{props.name}</p>
      <button onClick={props.click}>Trocar Usuário</button>
      {props.children}
      <hr />
    </header>
  );
}

function Form() {
  const [nome, setNome] = useState("");

  const handleName = (e) => {
    setNome(e.target.value);
  };

  return (
    <>
      <p>{nome}</p>
      <input
        type="text"
        placeholder="Digite seu nome*"
        value={nome}
        onChange={handleName}
      />
    </>
  );
}

function App() {
  const [user, setUser] = useState("Matheus");

  const handleClick = () => {
    if (user === "Matheus") setUser("Rilary");
    else setUser("Matheus");
  };

  return (
    <div>
      <Header name="Ciclano de Tayus" click={handleClick}>
        <p>Eu sou filho do Rei</p>
      </Header>
      <p>My React App</p>
      <p>Nome do Usuário: {user}</p>
      <hr />
      <div>
        <Form />
      </div>
    </div>
  );
}

export default App;
