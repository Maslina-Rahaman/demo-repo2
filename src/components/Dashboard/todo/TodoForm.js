import React from "react";
import shortid from "shortid";


class TodoForm extends React.Component {
    state = {
        title: "",
        description: "",
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            title: this.state.title,
            description: this.state.description,
            complete: false,
        });
        this.setState({
            title: "",
            description: "",
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="ui form">
                <div className="fields">
                    <div className="six wide field">
                        <label>Title</label>
                        <input
                            name="title"
                            type="text"
                            placeholder="Add the title here"
                            autoComplete="off"
                            value={this.state.title}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="eight wide required field">
                        <label>Description</label>
                        <input
                            name="description"
                            type="text"
                            placeholder="Add the description here"
                            autoComplete="off"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="two wide field">
                        <label>-</label>
                        <button
                            onClick={this.handleSubmit}
                            className="ui teal button"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

export default TodoForm;
