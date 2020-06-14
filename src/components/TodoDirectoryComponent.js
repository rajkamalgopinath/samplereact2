import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import TodoInfo from './TodoInfoComponent';


class TodoDirectory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTodo: null
        };
    }

    onTodoSelect(todo) {
        this.setState({selectedTodo: todo});
    }

    render() {
        const todo = this.props.todos.map(todo => {
            return (
                <div key={todo.id} className="col-md-4 m-2">
                    <Card onClick={() => this.onTodoSelect(todo)}>
                        <CardBody>
                            <CardTitle>{todo.name}</CardTitle>
                            <CardText>{todo.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {todo}
                </div>
                <TodoInfo todo={this.state.selectedTodo} />
            </div>
        );
    }
}

export default TodoDirectory;