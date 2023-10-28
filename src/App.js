import { useEffect, useState } from "react"
// import AddButton from "./components/AddButton.js"
import Footer from "./components/Footer.js"
import Heading from "./components/Heading.js"
import Loading from "./components/Loading.js"
import Todos from "./components/Todos.js"


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/jsonstore/todos')
      .then(res => res.json())
      .then(data => {
        const result = Object.keys(data).map(id => ({ id, ...data[id] }));
        setTodos(result);
      })
  }, []);

  const toggleTodoStatus = (id) => {
    setTodos(state => state.map(t => t.id === id ? ({ ...t, isCompleted: !t.isCompleted }) : t));
  }

  const onTodoAdd = (id) => {
    const lastId = Number(todos[todos.length - 1].id);
    setTodos(state => [...state, { id: lastId + 1, }])
  }

  return (
    <div>
      <Heading />

      <main className="main">

        <section className="todo-list-container">
          <h1>Todo List</h1>

          {/* <AddButton /> */}
          <div className="add-btn-container">
            <button className="btn" onClick={onTodoAdd}>+ Add new Todo</button>
          </div>

          <div className="table-wrapper">

            {/* <Loading /> */}

            <Todos todos={todos} toggleTodoStatus={toggleTodoStatus} />

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
