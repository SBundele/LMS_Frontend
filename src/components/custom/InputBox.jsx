import React from "react";
import { Field, Input } from "@chakra-ui/react";

function InputBox({label, type, placeholder, required, onChange}) {
  return (
    <Field.Root required={required}>
      <Field.Label>
        {label}
        {required && <Field.RequiredIndicator />}
      </Field.Label>
      <Input type={type} placeholder={placeholder} onChange={onChange} />
    </Field.Root>
  );
}

export default InputBox;
