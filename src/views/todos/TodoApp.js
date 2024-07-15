import React, { useEffect } from "react";
import CreateTodoApp from "./CreateTodoApp.js";
import UDTodoApp from "./UDTodoApp.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TodoApp extends React.Component {
    state = {
        listBook: []
    }

    addNewBook = (book) => {
        const newBook = { ...book, id: this.generateRandomId() };
        this.setState(prevState => ({
            listBook: [...prevState.listBook, newBook],
        }));

        toast.success('Added Success');
    }

    generateRandomId = () => {
        const min = 10000;
        const max = 99999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    deleteBook = (delBook) => {
        this.setState({
            listBook: this.state.listBook.filter(item => item.id !== delBook.id)
        })
        toast.success('Delete Success')
    }

    saveEditedBook = (bookId, editedTitle) => {
        const updatedBooks = this.state.listBook.map(book => {
            if (book.id === bookId) {
                return { ...book, title: editedTitle };
            }
            return book;
        });

        this.setState({
            listBook: updatedBooks
        });
        toast.info('Edit Success')
    };

    render() {
        return (
            <div className="todo-container container mx-auto">
                <div className="pb-8">First TodoApp with ReactJS</div>
                <CreateTodoApp
                    id={this.state.idCounter}
                    addNewBook={this.addNewBook}>
                </CreateTodoApp>
                <UDTodoApp
                    listBook={this.state.listBook}
                    deleteBook={this.deleteBook}
                    saveEditedBook={this.saveEditedBook}>
                </UDTodoApp>
                <ToastContainer />
            </div>
        )
    }
}

export default TodoApp;
