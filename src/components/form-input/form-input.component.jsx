import { StyleSheetManager } from "styled-components";
import isValidProp from "@emotion/is-prop-valid";

import { Group, FormInputLabel, Input } from "./form-input.styles";

function FormInput({ label, ...otherProps }) {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <StyleSheetManager shouldForwardProp={isValidProp}>
          <FormInputLabel shrink={otherProps.value.length}>
            {label}
          </FormInputLabel>
        </StyleSheetManager>
      )}
    </Group>
  );
}

export default FormInput;
