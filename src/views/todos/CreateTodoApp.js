import React from "react";
import { toast } from 'react-toastify';

class CreateTodoApp extends React.Component {
    state = {
        title: ''
    }

    handleOnChangeBook = (e) => {
        this.setState({
            title: e.target.value
        })
    }

    addBookButton = (e) => {
        e.preventDefault()

        if (!this.state.title) {
            toast.warn('Missing Parrams')
            return;
        }

        this.props.addNewBook({
            id: this.props.id,
            title: this.state.title,
        })

        this.setState({
            title: ''
        })
    }

    render() {
        return (
            <div className="create-todo pb-10">
                <div className="pb-2">Add your new book</div>
                <input value={this.state.title} className="border border-black rounded text-black" onChange={(e) => this.handleOnChangeBook(e)} type="text" />
                <button className="ml-10 border border-green-600 px-3 bg-green-600 text-white rounded hover:border-green-700 hover:bg-green-700"
                    onClick={(e) => this.addBookButton(e)}>
                    Add new book
                </button>
            </div>
        )
    }
}

export default CreateTodoApp;
