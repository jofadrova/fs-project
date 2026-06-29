import { useState } from "react";

type TaskInputProps = {
  onAddTask: (text: string) => void;
};

function TaskInput({ onAddTask }: TaskInputProps) {

  const [text, setText] = useState("");

  const handleAdd = () => {

    if (text.trim() === "") return;

    onAddTask(text);

    setText("");
  };

  return (
    <div className="task-input">

      <input
        type="text"
        placeholder="Nueva tarea..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAdd}>
        Agregar
      </button>

    </div>
  );
}

export default TaskInput;