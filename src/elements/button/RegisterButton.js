import React from "react";


export const RegisterButton = ({ buttonClick, isReady }) => {
    return (
        <button type="button" className="btn btn-azure active"
            onClick = {buttonClick}
            disabled={isReady === true ? null : 'disabled'}
        >
        회원 가입
        </button>
    );
};