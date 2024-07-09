import React from "react";
import ChildComponent from "./ChildComponent";
import FormComponent from "./FormComponent";
/**
 * phần return tương tự phần template trong vuejs, luôn phải return về 1 khối
 * tức chỉ có 1 template bọc 1 khối html
 * nếu không muốn có 1 div hiển thị thêm ở trang thì có thể dùng fragment (<React.Fragment>) 
 * hoặc gõ tắt là <></> tức là 1 thẻ giả để bọc các thẻ thật bên trong trong trường hợp không muốn
 * tạo thêm thẻ
 * state khá giống với two way binding của vuejs
 * truyền function qua props thì không cần dấu "()"
 * có 2 loại hàm khác nhau là arrow function và regular function
 * arrow function chủ yếu dùng cho xử lý sự kiện (onClick, onChange, ...), cách khai báo nameFunction = (có thể có tham số hoặc ko) => {} 
 * regular function chủ yếu dùng cho xử lý logic, cách khai báo nameFunction(có thể có tham số hoặc không) {}
 */


class MyComponent extends React.Component {
    state = {
        arrJobs: [
            { id: 1, title: "Developer", salary: "500" },
            { id: 2, title: "Testers", salary: "400" },
            { id: 3, title: "Business Analyst", salary: "700" },
            { id: 4, title: "Project Managerment", salary: "1000" },
        ]
    }

    addNewJob = (job) => {
        console.log("hello from parent: ", job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (delJob) => {
        this.setState({
            arrJobs: this.state.arrJobs.filter(item => item.id !== delJob.id)
        })
    }

    render() {
        return (
            <>
                <div>Html Form</div>
                <FormComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                    deleteJob={this.deleteJob}>
                </ChildComponent>
            </>
        )
    }
}

export default MyComponent