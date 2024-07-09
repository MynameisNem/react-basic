import React from "react";

class UDTodoApp extends React.Component {

    state = {
        editingBookId: null,
        editedTitle: ''
    }

    startEditBook = (bookId, title) => {
        this.setState({
            editingBookId: bookId,
            editedTitle: title
        });
    };

    cancelEditBook = () => {
        this.setState({
            editingBookId: null,
            editedTitle: ''
        });
    };

    saveEditedBook = (bookId) => {
        this.props.saveEditedBook(bookId, this.state.editedTitle);

        this.setState({
            editingBookId: null,
            editedTitle: ''
        });
    };

    handleTitleChange = (e) => {
        this.setState({
            editedTitle: e.target.value
        });
    };

    handleDeleteBook(delBook) {
        this.props.deleteBook(delBook)
    }

    render() {
        let { listBook } = this.props;

        return (
            <>
                {
                    (!listBook || listBook.length === 0) ?
                        <div className="listbook-zero pt-10">
                            You dont have any book in the moment!
                        </div>
                        :
                        <div className="flex flex-col">
                            {
                                listBook.map((item) => {
                                    return (
                                        <div className="flex items-center justify-between pt-5" key={item.id}>
                                            {this.state.editingBookId === item.id ? (
                                                <div className="flex items-center justify-between w-full">
                                                    <input
                                                        type="text"
                                                        value={this.state.editedTitle}
                                                        onChange={this.handleTitleChange}
                                                        className="border border-black rounded text-black"
                                                    />
                                                    <div className="flex whitespace-nowrap ml-4 space-x-2">
                                                        <button
                                                            className="border border-green-600 px-3 bg-green-600 text-white rounded hover:border-green-700 hover:bg-green-700"
                                                            onClick={() => this.saveEditedBook(item.id)}
                                                        >
                                                            Save
                                                        </button>
                                                        <button
                                                            className="border border-red-600 px-3 bg-red-600 text-white rounded hover:border-red-700 hover:bg-red-700"
                                                            onClick={this.cancelEditBook}
                                                        >
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="flex items-center justify-between w-full border-b">
                                                        <span>Book ID: {item.id}</span>
                                                        <span>Title: {item.title}</span>
                                                    </div>

                                                    <div className="flex whitespace-nowrap ml-4 space-x-2">
                                                        <button className="border border-green-600 px-3 bg-green-600 text-white rounded hover:border-green-700 hover:bg-green-700"
                                                            onClick={() => this.startEditBook(item.id, item.title)}>
                                                            Edit Book
                                                        </button>
                                                        <button className="border border-red-600 px-3 bg-red-600 text-white rounded hover:border-red-700 hover:bg-red-700"
                                                            onClick={() => this.handleDeleteBook(item)}>
                                                            Delete Book
                                                        </button>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    )
                                })
                            }
                        </div>
                }
            </>
        )
    }
}

export default UDTodoApp