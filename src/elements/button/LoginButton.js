import React from "react";

export const LoginButton = ({ buttonClick }) => {
    return (
        <button type="button" className="btn btn-blue active" onClick = {buttonClick}>로그인</button>
    );
};