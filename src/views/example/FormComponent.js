import React from "react";

class FormComponent extends React.Component {

    state = {
        id: null,
        title: '',
        salary: ''
    }

    handleOnChangeJob(e) {
        this.setState({
            title: e.target.value
        })
    }
    handleOnChangeSalary(e) {
        this.setState({
            salary: e.target.value
        })
    }
    handleOnClick = (e) => {
        e.preventDefault();

        if (!this.state.title || !this.state.salary) {
            alert("Missing require parrams")
            return;
        }
        // console.log("Hello from child: ", this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 10000) + 1,
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            id: null,
            title: '',
            salary: ''
        })
    }
    render() {
        return (
            <>
                <form className="flex flex-col my-10" action="">
                    <label htmlFor="fname">Job</label>
                    <input className="text-black" value={this.state.title} type="text" onChange={(e) => this.handleOnChangeJob(e)} />
                    <label htmlFor="lname">Salary</label>
                    <input className="text-black" value={this.state.salary} type="text" onChange={(e) => this.handleOnChangeSalary(e)} />
                    <button onClick={(e) => this.handleOnClick(e)} className="mt-10 px-4 py-2 bg-white text-black rounded-lg" type="submit" >Submit</button>
                </form>
            </>
        )
    }
}

export default FormComponent