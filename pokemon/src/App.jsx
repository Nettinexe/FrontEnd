import { NavLink } from "react-router";

function App() {
  return (
    <div className="container">
      <h1 className="title">Pokédex</h1>
      <ul className="list">
        <li className="list-item">
          <button className="link">Foo</button>
        </li>
        <li className="list-item">
          <button className="link">Bar</button>
        </li>
        <li className="list-item">
          <button className="link">Xpto</button>
        </li>
      </ul>

      <div className="pokemon-detail">
        <h2 className="title">Nome</h2>
        <div className="pokemon-img-container">
          <img src={null} className="pokemon-img" alt="foto frente" />
          <img src={null} className="pokemon-img" alt="foto verso" />
        </div>
        <p className="info">Peso</p>
        <p className="info">Altura</p>
      </div>

      <hr />

      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <NavLink to="/buscador" className="link">
          Buscador
        </NavLink>
      </div>
    </div>
  );
}

export default App;
