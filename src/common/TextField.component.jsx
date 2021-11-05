import React from "react";
import { ErrorMessage, useField } from "formik";

export const TextField = ({ label, requiredMark, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="mb-2">
            <label className="control-label">{label}</label>
            {requiredMark && <span className="text-danger"> *</span>}
            <input
                className={
                    meta.touched && meta.error
                        ? "form-control is-invalid"
                        : "form-control"
                }
                {...field}
                {...props}
            />
            {meta.error && (
                <div className="invalid-feedback">
                    <ErrorMessage name={field.name} />{" "}
                </div>
            )}
        </div>
    );
};
