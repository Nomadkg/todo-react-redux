import React, { Component } from "react";
import PropTypes from 'prop-types';

import './input.css';

export default class Input extends Component {
    state = {
        value: '',
    };

    handleChange = (e) => {
        this.setState({value: e.target.value});
    };

    handleKeyPress = (e) => {
        if (e.key !== "Enter") return;

        if (!this.state.value) return;

        this.props.onAddTodo(this.state.value);
        this.setState({value: ''});
    };

    render() {
        return (
            <input
                type        = { "text" }
                value       = { this.state.value }
                placeholder = { this.props.placeholder }
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