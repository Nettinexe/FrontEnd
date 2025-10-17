import { NavLink } from "react-router";

function Buscador() {
  return (
    <div className="container">
      <h1 className="title">Buscar Pokémon</h1>

      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <input className="input" type="text" placeholder="Digite o nome" />
        <button className="link" style={{ marginLeft: "0.5rem" }}>
          Buscar
        </button>
        <button className="link" style={{ marginLeft: "0.5rem" }}>
          Limpar
        </button>
      </div>

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
        <NavLink to="/" className="link">
          Voltar
        </NavLink>
      </div>
    </div>
  );
}

export default Buscador;
