import React from "react";

export const FormErrorMessage = ({ errorMessage }) => {
    return (
        <div className="form-group has-error has-feedback">
            <label className="control-label">{errorMessage}</label>
        </div>
    );
};