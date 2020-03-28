import React, { Component } from "react";
import PropTypes from 'prop-types';

import './input.css';

export default class Input extends Component {
    state = {
        value: ""
    };

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };

    handleKeyPress = (e) => {
        if (e.key !== "Enter") return;

        const { onAddTodo } = this.props;
        const { value } = this.state;

        if (!value) return;

        onAddTodo(value);

        this.setState({ value: "" });
    };

    render() {
        const { placeholder } = this.props;
        const { value } = this.state;

        return (
            <input
                type        = { "text" }
                value       = { value }
                placeholder = { placeholder }
                onChange    = { this.handleChange }
                onKeyPress  = { this.handleKeyPress }
            />
        );
    }
}

Input.propTypes = {
    placeholder: PropTypes.string,
    onAddTodo: PropTypes.func
};