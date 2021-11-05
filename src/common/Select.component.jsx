import React from "react";
import { ErrorMessage, useField, Field } from "formik";

export const TextField = ({ label, name, options, requiredMark, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <div className="mb-2">
            <label className="control-label">{label}</label>
            {requiredMark && <span className="text-danger"> *</span>}
            <Field
                as="select"
                className={`form-control ${meta.error && "is-invalid"}`}
                id={name}
                name={name}
            >
                {options.map((option) => {
                    return (
                        <option key={option.id} value={option.id}>
                            {option.name}
                        </option>
                    );
                })}
            </Field>
            {meta.error && (
                <div className="invalid-feedback">
                    <ErrorMessage name={field.name} />{" "}
                </div>
            )}
        </div>
    );
};
