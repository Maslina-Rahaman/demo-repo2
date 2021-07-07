import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

class TodoList extends React.Component {
    state = {
        todos: [],
        todoToShow: "all",
    };

    addTodo = (todo) => {
        this.setState((state) => ({
            todos: [todo, ...state.todos],
        }));
    };

    toggleComplete = (id) => {
        this.setState((state) => ({
            todos: state.todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete,
                    };
                } else {
                    return todo;
                }
            }),
        }));
    };

    handleDeleteTodo = (id) => {
        this.setState((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        }));
    };

    render() {
        let todos = this.state.todos;

        return (
            <div>
                <TodoForm onSubmit={this.addTodo} />

                <div className="ui scroll very relaxed divided list">
                    {todos.map((todo) => (
                        <Todo
                            key={todo.id}
                            toggleComplete={() => this.toggleComplete(todo.id)}
                            onDelete={() => this.handleDeleteTodo(todo.id)}
                            todo={todo}
                        />
                    ))}
                    <div className="ui placeholder segment">
                        <div className="ui icon header">
                            <i className="question circle outline icon"></i>
                            Please add your notes above to see them listed here.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;
