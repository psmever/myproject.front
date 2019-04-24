import React from "react";

export const SaveButton = ({ buttonClick }) => {
    return (
        <button type="button" className="btn btn-blue active" onClick = {buttonClick}>저장</button>
    );
};