function Tasks(props) {
  console.log(props);
  return (
    <div>
      <h1>
        {props.tasks.map((task) => (
          <p>{task.title}</p>
        ))}
      </h1>
    </div>
  );
}

export default Tasks;
