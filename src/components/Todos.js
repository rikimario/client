import Todo from "./Todo.js"

export default function Todos({
    todos,
    toggleTodoStatus,
}) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table-header-task">Task</th>
                    <th className="table-header-status">Status</th>
                    <th className="table-header-action">Action</th>
                </tr>
            </thead>
            <tbody>

                {todos.map(todo => <Todo key={todo.id} {...todo}
                    toggleTodoStatus={toggleTodoStatus} />)}

            </tbody>
        </table>
    )
};