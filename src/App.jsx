import { useEffect, useState } from "react"
import AddButton from "./components/AddButton.jsx"
import Footer from "./components/Footer.jsx"
import Heading from "./components/Heading.jsx"
import Loading from "./components/Loading.jsx"
import Todos from "./components/Todos.jsx"


function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/todos`)
      .then(res => res.json())
      .then(data => {
        setTodos(Object.values(data));
      })
  }, [])

  return (
    <div>
      <Heading />

      <main className="main">

        <section className="todo-list-container">
          <h1>Todo List</h1>

          <AddButton />

          <div className="table-wrapper">

            {/* <Loading /> */}

            <Todos todos={todos} />

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
