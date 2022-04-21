import React from "react";

import { useField, ErrorMessage } from "formik";
import { CFormInput, CFormLabel } from "@coreui/react";
function InputwithValidation({ label, ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="input__Wrapper mb-4">
      <CFormLabel htmlFor={field.name}>{label}</CFormLabel>
      <CFormInput
        className={`form-control shadow-none ${
          meta.touched && meta.error && `is-invalid`
        }`}
        autoComplete="off"
        {...field}
        {...props}
        
      />
      <ErrorMessage component="div" className="error" name={field.name} />
    </div>
  );
}

export default InputwithValidation;
