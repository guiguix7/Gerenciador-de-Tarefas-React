import "./App.css";
import Tasks from "./Components/Task.jsx";
import AddTask from "./Components/AddTask.jsx";
import { useState } from "react";

function App() {
  const [tasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Praticar e estudar react diariamente",
      isComplete: false,
    },
  ]);
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header>
        <div className="mx-auto flex max-w-5xl justify-center px-6 py-12">
          <h1 className="text-center font-serif text-4xl font-semibold tracking-tight md:text-5xl">
            Gerenciador de Tarefas
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto grid max-w-5xl gap-6 px-6 pb-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-center shadow-[var(--shadow)]">
            <h2>Adcionar uma Tarefa</h2>
            <AddTask></AddTask>
          </section>
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 text-center shadow-[var(--shadow)]">
            <h2>Tarefas</h2>
            <Tasks tasks={tasks}></Tasks>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
