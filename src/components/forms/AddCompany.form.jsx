import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { getAllCountries } from "../../services/User.service";
import { addCompany } from "../../services/Admin.service";
import { addCompanyFormValidation } from "./Validation.schema";
import { getCurrentUser } from "../../services/User.service";
import { TextField } from "../../common/TextField.component";
import { useHistory } from "react-router";

export function AddCompanyForm() {
    const history = useHistory();
    const [countries, setCountries] = useState([]);

    function getCountriesList() {
        Promise.all([getAllCountries()]).then((values) => {
            setCountries(values[0]);
        });
    }

    useEffect(() => {
        getCountriesList();
    }, []);

    return (
        <Formik
            initialValues={{
                admin_id: getCurrentUser().id,
                name_en: "",
                contact_person_name_en: "",
                name_ar: "",
                contact_person_name_ar: "",
                country_id: "",
                username: "",
                email: "",
                password1: "",
                password2: "",
                phone_no: "",
                is_active: "",
                license_start_date: "",
                license_end_date: "",
                users_limit: "",
                branches_limit: "",
            }}
            validationSchema={addCompanyFormValidation}
            onSubmit={async (values, actions) => {
                try {
                    await addCompany(values);
                    history.push(`/company/${values.username}`);
                    actions.setSubmitting(false);
                } catch (error) {
                    console.log(error);
                }
            }}
        >
            {(formikProps) => (
                <Form className="form-card" onSubmit={formikProps.handleSubmit}>
                    <span className="form-divider-tag">
                        <i class="fas fa-edit"></i>&nbsp;
                        <b>Basic Information</b>
                    </span>
                    <hr />
                    <br />
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <TextField
                                label="English Company Name"
                                requiredMark
                                name="name_en"
                                id="name_en"
                            />
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <TextField
                                label="English Contact Person Name"
                                requiredMark
                                id="contact_person_name_en"
                                name="contact_person_name_en"
                            />
                        </div>
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <TextField
                                label="Arabic Company Name"
                                id="name_ar"
                                name="name_ar"
                            />
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <TextField
                                label="Arabic Contact Person Name"
                                id="contact_person_name_ar"
                                name="contact_person_name_ar"
                            />
                        </div>
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <label className="control-label">
                                Select Country
                                <span className="text-danger"> *</span>
                            </label>
                            <select
                                className={
                                    formikProps.errors.country_id &&
                                    formikProps.touched.country_id
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                type="select"
                                id="country_id"
                                name="country_id"
                                placeholder=""
                                onChange={formikProps.handleChange}
                            >
                                <option value="">Select country</option>
                                {countries.map((country) => (
                                    <option key={country.id} value={country.id}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                            {formikProps.errors.country_id && (
                                <div className="invalid-feedback">
                                    <ErrorMessage name="country_id" />
                                </div>
                            )}
                        </div>
                    </div>
                    <br />
                    <span className="form-divider-tag">
                        <i class="fas fa-edit"></i>&nbsp;
                        <b>Account Information</b>
                    </span>
                    <hr />
                    <br />
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <TextField
                                label="Username"
                                requiredMark
                                id="username"
                                name="username"
                            />
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <TextField
                                requiredMark
                                label="Email"
                                id="email"
                                name="email"
                            />
                        </div>
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <TextField
                                label="Password"
                                requiredMark
                                type="password"
                                id="password1"
                                name="password1"
                            />
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <TextField
                                label="Retype Password"
                                requiredMark
                                type="password"
                                id="password2"
                                name="password2"
                            />
                        </div>
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <TextField
                                label="Phone"
                                requiredMark
                                id="phone_no"
                                name="phone_no"
                            />
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <label className="control-label">
                                Status
                                <span className="text-danger"> *</span>
                            </label>
                            <select
                                className={
                                    formikProps.errors.is_active &&
                                    formikProps.touched.is_active
                                        ? "form-control is-invalid"
                                        : "form-control"
                                }
                                type="text"
                                id="is_active"
                                name="is_active"
                                placeholder=""
                                onChange={formikProps.handleChange}
                            >
                                <option value="">Select Status</option>
                                <option value="1">Active</option>
                                <option value="2">Inactive</option>
                            </select>
                            {formikProps.errors.is_active && (
                                <div className="invalid-feedback">
                                    <ErrorMessage name="is_active" />
                                </div>
                            )}
                        </div>
                    </div>
                    <br />
                    <span className="form-divider-tag">
                        <i class="fas fa-edit"></i>&nbsp;
                        <b>License Information</b>
                    </span>
                    <hr />
                    <br />
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <TextField
                                label="License Start Dateone"
                                type="date"
                                requiredMark
                                id="license_start_date"
                                name="license_start_date"
                            />
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <TextField
                                label="License End Date"
                                type="date"
                                requiredMark
                                id="license_end_date"
                                name="license_end_date"
                            />
                        </div>
                    </div>
                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <TextField
                                label="Max limit of employees"
                                requiredMark
                                id="users_limit"
                                name="users_limit"
                            />
                        </div>
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <TextField
                                label="Max limit of branches"
                                requiredMark
                                id="branches_limit"
                                name="branches_limit"
                            />
                        </div>
                    </div>

                    <div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn-block btn-success"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    );
}
