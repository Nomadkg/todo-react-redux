import React from "react";
import PropTypes from 'prop-types';

import './title.css';

const Title = ({ title }) => {
    return (
        <div className="header">
            <div className="title">{title}</div>
        </div>
    );
};

Title.propTypes = {
    title: PropTypes.string
};

export default Title;