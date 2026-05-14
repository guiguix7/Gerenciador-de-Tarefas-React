function AddTask() {
  return (
    <div>
      <h3>Nome da Tarefa:</h3>
      <input
        type="text"
        name="task"
        id="nameTask"
        placeholder="Ex: Jogar o lixo fora"
      />
      <h3>Descrição da Tarefa:</h3>
      <input
        type="text"
        name="task"
        id="nameTask"
        placeholder="Ex: Jogar o lixo fora"
      />
      <button>
        <span>Criar Tarefa</span>
      </button>
    </div>
  );
}

export default AddTask;
