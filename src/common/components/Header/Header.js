import React from "react";
import PropTypes from "prop-types";

import "./title.css";

const Header = ({ title }) => {
    return (
        <div className="header">
            <div className="title">{title}</div>
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string,
};

export default Header;
