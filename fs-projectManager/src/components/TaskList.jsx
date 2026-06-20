import TaskCard from "./TaskCard";

function TaskList() {
    const tasks = [
        "Estudia React",
        "Practicar Componentes",
        "Entender props",
        "Ejecutar la aplicacion"
    ];

     return (
    <div className="task-container">
      {tasks.map((task, index) => (
        <div className="task-card" key={index}>
          {task}
        </div>
      ))}
    </div>
  );
    
}

export default TaskList;