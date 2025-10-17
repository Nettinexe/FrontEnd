import { useState} from "react"
const nomes = ["Luiz", "Felipe", "Joao"]

function BoasVindas ({mensagem, mensagem2}) {
  return <div>
    <p>{mensagem}</p>
    <p>{mensagem2}</p>
    </div>
}


function App() {
  return (
  <div>
  <h1>Olá povo!</h1>
  <BoasVindas mensagem = "Olá, pessoal!" mensagem2= "Tudo bem?" />
  <Contador/>
  <Limpa_Texto/>
  <Lista/>
  </div>
  );
}
function Contador (){
  const [cont , setCont] = useState(0);

  return (
    <div>

    <p>{cont}</p>
    <button onClick={() => setCont(cont + 1)} type="button">Contar</button>
    </div>
  );
}
function Limpa_Texto (){
  const [text , setText] = useState("Teste");

  return (
    <div>

    <p>{text}</p>
    <button onClick={() => setText("Testou")} type="button">Teste</button>
    </div>
  )
}
function Lista() {
  const  [nomes, setNomes] = useState([]);
  return <div>
  <button onClick={() => setNomes([...nomes, "Luiz"])} type="button">Aumentar</button>
  <button onClick={() => setNomes([])} type="button">Diminuir</button>
  <ul>
    {nomes.map((nomeDaVez) => {
      return <li>{nomeDaVez}</li>
    })}
  </ul>
  </div>
}
export default App;