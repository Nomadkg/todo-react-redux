import React, { Component } from "react";
import PropTypes from "prop-types";
import toastr from "toastr";

import "toastr/build/toastr.min.css";
import "./input.css";

export default class Form extends Component {
    state = { value: "" };

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };

    handleKeyPress = (e) => {
        if (e.key !== "Enter") return;

        if (!this.state.value) {
            setTimeout(() => toastr.error("Cannot create todo!"), 0);
            return;
        }

        this.props.onAddTodo(this.state.value);
        setTimeout(() => toastr.success("Todo successfully created!"), 0);
        this.setState({ value: "" });
    };

    render() {
        return (
            <input
                type={"text"}
                value={this.state.value}
                placeholder={this.props.placeholder}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
            />
        );
    }
}

Form.propTypes = {
    placeholder: PropTypes.string,
    onAddTodo: PropTypes.func,
};
