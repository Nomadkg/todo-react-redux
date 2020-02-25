import React, { Component } from "react";
import './input.css';

class Input extends Component {
    state = {
        value: ""
    };

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    };

    handleKeyPress = (e) => {
        if (e.key !== "Enter") return;

        const { onSubmitEditing } = this.props;
        const { value } = this.state;

        if (!value) return; // Don't submit if empty

        onSubmitEditing(value);

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

export default Input;
