import { Component } from "react";

class Form extends Component {
    state = {
        data: {},
        errors: {},
    };

    validateInput = (name, value) => {
        if (
            name === "name" ||
            "phone" ||
            "address" ||
            "designation" ||
            "email" ||
            "salary"
        ) {
            if (value.trim() === "")
                return "This is a required field. Can't be empty.";
        }
        return "";
    };

    handleChange = ({ currentTarget: input }) => {
        const data = { ...this.state.data };
        data[input.name] = input.value;

        const errors = { ...this.state.errors };
        const error = this.validateInput(input.name, input.value);

        if (error) errors[input.name] = error;
        else delete errors[input.name];

        this.setState({ data, errors: errors || {} });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.doSubmit(event);
    };

    render() {
        return;
    }
}

export default Form;
