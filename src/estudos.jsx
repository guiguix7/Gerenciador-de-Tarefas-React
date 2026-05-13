/*
Diferenças: react.jsx(JavaScript) & react.tsx(TypeScript)

O react é a mistura entra o js/ts com o hrml

em uma funcion ex:[function App() {
  const message = "Olá Mundo!";
  return <h1>{message}</h1>;
}], não é pertimitudo 2 elementos como divs

=============
State

const [message, setmessage] = useState('Olá Mundo!'); // coloca os valores nas variaveis

  return (
    <div>
      <h1>{message}</h1> //mensagem normal, sem alteração
      <button onClick={() => setmessage("Fui Clicado!")}>Clique-me</button> // ao clicar muda o valor da mariavel 'message'
    </div>
  );

*/
