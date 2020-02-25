import React from "react";
import './title.css';

const Title = ({ title }) => {
    return (
        <div className="header">
            <div className="title">{title}</div>
        </div>
    );
};


export default Title;