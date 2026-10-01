
import './App.css'

function ganharmulta(multa){
  if(multa >= 80) {
    return "Andando muito rápido! Ganhaste uma multa por isso."
  }else if(multa >= 50){
    return "Andaste no limite estabelecido. Sem multas"
  }else{
    return "muito lento, uma tartaruga é mais rápida. Multa por não andar no limite de velocidade!"
  }
  }


function App() {
 const modelo = "Chevrolet"
 const cor = "Vermelho"
 const kmrodado = 45.999
 const suasMultasTotais = 0

  return (
    <>
      <h1>{modelo}</h1>
      <p>cor: {cor}</p>
      <p>Km's rodados: {kmrodado}</p>
      <p>multas:{suasMultasTotais}</p>
    
    </>
  )
}

export default App
