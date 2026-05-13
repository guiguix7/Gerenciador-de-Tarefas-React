import "./App.css";
import Tasks from "./Components/Task.jsx";
import AddTask from "./Components/AddTask.jsx";

function App() {
  return (
    <div className="">
      <header className="w-screen h-screen flex justify-center p-6">
        <h1 className="text-4xl">Gerenciador de Tarefas</h1>
      </header>
      <main className="">
        <section className="">
          <AddTask></AddTask>
        </section>
        <section className="">
          <Tasks></Tasks>
        </section>
        <h1 className="">Teste</h1>
      </main>
    </div>
  );
}

export default App;
