import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';

import { TODOS } from '../shared/todos';


import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';

import TodoDirectory from './TodoDirectoryComponent';
import TodoInfo from './TodoInfoComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: TODOS,
            selectedTodo: null
        };
    }

    onTodoSelect(todo) {
        this.setState({selectedTodo: todo});
    }

    render() {
    
    
        const HomePage = () => {
            return (
                <Home />
            );
        }

    
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={HomePage} />
                    <Route path='/todo' render={() => <TodoDirectory todos={this.state.todos} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer/>
            </div>
        );
    };
}

export default Main;