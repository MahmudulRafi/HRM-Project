import React from "react";

const Input = ({ type, id, name, value, onChange, label, error }) => {
    return (
        <>
            <label class="form-label" htmlFor={id}>
                {label}
            </label>
            <input
                type={type}
                class="form-control"
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />
            {error[name] && (
                <div className="alert alert-danger"> {error[name]}</div>
            )}
        </>
    );
};

export default Input;
