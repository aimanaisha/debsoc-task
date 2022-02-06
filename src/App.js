import { useState } from 'react';
import './App.css';
import Form from './Form';
import Display from './Display';

const list=[];


function App() {

const [todo, setTodo] = useState(list)

  const dataFetchHandler=(entry)=>{
    console.log(entry)
    if(entry){
      setTodo([entry, ...todo])
    }
    
  }

  return (
    <div>
     <Form onDataFetch={dataFetchHandler}/>
     {todo.map((element)=>{
       return(<Display onRendering={element}/>);
     })
     }
    </div>
  );
}

export default App;


