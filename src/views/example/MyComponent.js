import React from "react";
/**
 * phần return tương tự phần template trong vuejs, luôn phải return về 1 khối
 * tức chỉ có 1 template bọc 1 khối html
 * nếu không muốn có 1 div hiển thị thêm ở trang thì có thể dùng fragment (<React.Fragment>) 
 * hoặc gõ tắt là <></> tức là 1 thẻ giả để bọc các thẻ thật bên trong trong trường hợp không muốn
 * tạo thêm thẻ
 * state khá giống với two way binding của vuejs
 */


class MyComponent extends React.Component {
    state = {
        name: null,
        age: null,
        address: null
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handleOnChangeAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} />
                <div>
                    My name is {this.state.name}
                </div>
                <input value={this.state.age} type="text" onChange={(event) => this.handleOnChangeAge(event)} />
                <div>
                    I {this.state.age} years old
                </div>
                <input value={this.state.address} type="text" onChange={(event) => this.handleOnChangeAddress(event)} />
                <div>
                    I live in {this.state.address}
                </div>
            </React.Fragment>
        )
    }
}

export default MyComponent