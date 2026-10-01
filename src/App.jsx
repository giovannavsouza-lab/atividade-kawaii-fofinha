
import './App.css'

function situacaoAluno(medianota){
  if(medianota >= 7) {
    return "Aprovado"
  }else if(medianota >= 5){
    return "recuperação"
  }else{
    return "Reprovado. Foi de ralo"
  }
  }


function App() {
 let titulo = "TESTE"
 let conteudo = "No seriado de tv, Club das Winx. Temos como protagonita um grupo de jovens garotas fadas, são elas:Bloom, a fada da chama do dragão; Stella, a fada do sol reluzente; Flora, a fada da natureza; Musa, a fada da música; Tecna, a fada da tecnologia e Aisha(ou Layla), a fada das ondas."
const nome = "Isadora FofinhaKwaii"
const nota01 = 8
const nota02 = 3
const nota03 = 10
const medianota = (nota01 + nota02 + nota03)/3

  return (
    <>
      <h1>{titulo}</h1>
      <p>{conteudo}</p>
      <h2>Aluno: {nome}</h2>
      <h2>Notas:{nota01},{nota02},{nota03}</h2>
      <h4>Média:{medianota}</h4>
      <h4>Situação do aluno(a): {situacaoAluno(medianota)}</h4>
    </>
  )
}

export default App
