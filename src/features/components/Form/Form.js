import React, { Component } from "react";
import PropTypes from "prop-types";
import toastr from "toastr";

import "toastr/build/toastr.min.css";
import "./input.css";

export default class Form extends Component {
    state = {
        text: "",
    };

    handleChange = (e) => {
        this.setState({ text: e.target.value });
    };

    handleKeyPress = (e) => {
        if (e.key !== "Enter") return;

        const { onAddTodo } = this.props;
        const { text } = this.state;

        if (!this.state.text) {
            setTimeout(() => toastr.error("Cannot create todo!"), 0);
            return;
        }

        onAddTodo(text);
        setTimeout(() => toastr.success("Todo successfully created!"), 0);
        this.setState({ text: "" });
    };

    render() {
        const { placeholder } = this.props;
        const { text } = this.state;

        return (
            <input
                type={"text"}
                value={text}
                placeholder={placeholder}
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
