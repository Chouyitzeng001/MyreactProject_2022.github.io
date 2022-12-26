import React,{useState,useEffect} from 'react'
import './App.css'
//各個方法
import Header from './components/Headers'
import Form from './components/Form'
import TodosList from './components/TodosList'

const App = () => {
//當前輸入資料更新不消失
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input,setInput] = useState("");
  //const [todos,setTodos] = useState([]);
  const [todos,setTodos] = useState(initialState);
  const [editTodo,setEditTodo] = useState(null)
  

//當前輸入資料更新不消失
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));//todos轉型成JSON
  },[todos]);

    return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
        <Header />
        </div>
        <div>
        <Form 
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        />
        </div>
        <div>
          <TodosList 
          todos={todos}
          setTodos={setTodos}
          setEditTodo={setEditTodo}
          />
        </div>
      </div>
      
    </div>
  )
}

export default App;
