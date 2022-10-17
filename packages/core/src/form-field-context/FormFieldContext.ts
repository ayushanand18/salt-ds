import { Dispatch, FocusEventHandler, RefObject, SetStateAction } from "react";
import { useA11yValueValue, FormFieldValidationStatus } from "../form-field";
import { createContext } from "../utils";
export interface FormFieldContextValue {
  inFormField: true;
  ref: RefObject<HTMLDivElement>;
  a11yProps: useA11yValueValue;
  focused: boolean;
  setFocused: Dispatch<SetStateAction<boolean>>;
  onBlur: FocusEventHandler<HTMLElement>;
  onFocus: FocusEventHandler<HTMLElement>;
  validationStatus?: FormFieldValidationStatus;
}

export const FormFieldContext = createContext(
  "FormFieldContext",
  {} as FormFieldContextValue
);
