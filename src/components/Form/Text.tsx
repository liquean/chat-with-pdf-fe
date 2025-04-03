import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Field } from "react-final-form";
import { validateField } from "./validator";
import { InputProps } from "./types";
import { memo } from "react";

function Text(props: InputProps) {
  const { fieldName, label, loading, validationErrorMessage } = props;

  return (
    <FormControl fullWidth>
      <Field<string>
        name={fieldName}
        validate={(value) => validateField(value, validationErrorMessage)}
      >
        {({ input, meta }) => {
          const showError = meta.error && meta.touched;
          return (
            <TextField
              inputProps={{
                "data-testid": `test-${fieldName}`,
              }}
              disabled={loading}
              type="text"
              label={label}
              error={showError}
              helperText={showError ? meta.error : ""}
              fullWidth
              variant="outlined"
              color={showError ? "error" : "primary"}
              {...input}
            />
          );
        }}
      </Field>
    </FormControl>
  );
}

Text.defaultProps = {
  validationErrorMessage: "Enter a valid value",
};

export default memo(Text);
