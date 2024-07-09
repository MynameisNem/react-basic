import React from "react";

/**
 * có 2 cách lấy data được truyền từ props, ví dụ trong code
 * có 2 kiểu khai báo nhưng cách dùng tương tự nhau là class và function, cách dùng ở dưới
 */

// đây là class
class ChildComponent extends React.Component {
    state = {
        showJob: false
    }

    handleOnChangeShowJob() {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleDeleteJob(delJob) {
        // console.log("Check del job", delJob);
        this.props.deleteJob(delJob)
    }

    render() {
        // let name = this.props.name; cách 1 gõ đầy đủ
        // let age = this.props.age;

        // hoặc 
        let { arrJobs } = this.props; // cách 2 gõ ngắn, dùng cách này thường xuyên
        let { showJob } = this.state;

        return (
            <>
                {showJob === false ?
                    <div>
                        <button onClick={() => this.handleOnChangeShowJob()} className="mt-10 px-4 py-2 bg-white text-black rounded-lg">
                            Show Job Available
                        </button>
                    </div>
                    :
                    <>
                        {
                            arrJobs.map((item) => {
                                return (
                                    <div className="flex" key={item.id}>
                                        {item.title} - Salary: {item.salary}$
                                        <span onClick={() => this.handleDeleteJob(item)} className="ml-8 cursor-pointer">X</span>
                                    </div>
                                )
                            })
                        }
                        <div>
                            <button onClick={() => this.handleOnChangeShowJob()} className="mt-10 px-4 py-2 bg-white text-black rounded-lg">
                                Hide All
                            </button>
                        </div>
                    </>
                }
            </>
        )
    }
}

// đây là function, nếu dùng function thì không cần dùng tham chiếu this mà khai báo trong dấu "()" ở phần khai báo function,
// ở đoạn const NameComponent = (khai báo ở đây) => {code}
// const ChildComponent = (props) => {
//     let { name, age, arrJobs } = props // cách 2 gõ ngắn, dùng cách này thường xuyên
//     return (
//         <>
//             <div>{name}</div>
//             <div>Age: {age}</div>
//             {
//                 arrJobs.map((item, index) => {
//                     return (
//                         <div key={item.id}>
//                             {item.title} - {item.salary}
//                         </div>
//                     )
//                 })
//             }
//         </>
//     )
// }

export default ChildComponent