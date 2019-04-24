import React from "react";

export const ConfirmButton = ({ buttonClick }) => {
    return (
        <button type="button" className="btn btn-blue active" onClick = {buttonClick}>확인</button>
    );
};