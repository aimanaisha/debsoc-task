import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Display from "./Display";

const list = [];

function App() {
  const [todo, setTodo] = useState(list);

  const dataFetchHandler = (entry) => {
    console.log(entry);
    if (entry) {
      setTodo([entry, ...todo]);
    }
  };

  return (
    <div>
      <Form onDataFetch={dataFetchHandler} />
      {todo.map((element, index) => {
        return (
          <Display
            onRendering={element}
            onRemove={() =>
              setTodo([
                ...todo.slice(0, index),
                ...todo.slice(index + 1, todo.length),
              ])
            }
          />
        );
      })}
    </div>
  );
}

export default App;
