import "./App.css";

function App() {
  return (
    <div className="page">
      <header className="hero">
        <h1>Gerenciador de Tarefas</h1>
      </header>
      <main className="layout">
        <section className="card form-card">
          <div className="card-header">
            <h2>Nova tarefa</h2>
          </div>
          <div className="field">
            <label htmlFor="task-title">Titulo da Tarefa</label>
            <input id="task-title" type="text" placeholder="Titulo da Tarefa" />
          </div>
          <div className="field">
            <label htmlFor="task-desc">Descrição da Tarefa</label>
            <input
              id="task-desc"
              type="text"
              placeholder="Descrição da Tarefa"
            />
          </div>
          <div className="form-actions">
            <button type="button">Registrar</button>
          </div>
        </section>
        <section className="card list-card">
          <div className="card-header">
            <h2>Tarefas</h2>
            <span className="chip ghost">Hoje</span>
          </div>
          <div className="task-empty">
            <h3>Nenhuma Tarefa Cadstrada</h3>0
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
