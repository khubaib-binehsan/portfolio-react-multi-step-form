import { InputField } from "./InputField";
import { ErrorMessage } from "./ErrorMessage";
import { useRef } from "react";
import { useUser } from "../MyProvider";

export const PhoneInput = () => {
  const { userDetails, setUserDetails } = useUser();
  const initialRender = useRef(true);

  function errorMessage(input) {
    if (input.length === 0) return "Phone number cannot be blank";
    if (input.length < 14) return "Incomplete phone number";
    return "";
  }

  function isValid(param) {
    return !errorMessage(param) ? true : false;
  }

  function setState(update, state) {
    setUserDetails({
      ...state,
      phone: {
        value: update,
        isValid: isValid(update),
      },
    });
  }

  function handleChange(e) {
    let value = String(e.target.value);
    // const PATTERN_MATCH = /[()\s-a-zA-Z]/g;
    const PATTERN_MATCH = /\D/g;

    value = String(value).replaceAll(PATTERN_MATCH, "");

    if (value.length < 4) {
      setState(value, userDetails);
    } else if (value.length < 7) {
      setState(`(${value.slice(0, 3)}) ${value.slice(3)}`, userDetails);
    } else if (value.length <= 10) {
      setState(
        `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`,
        userDetails
      );
    }
    initialRender.current = false;
  }

  const state = userDetails.phone.value;

  return (
    <li className="list-none">
      <InputField
        name="phone"
        type="text"
        title="Phone Number"
        placeholder="e.g. (234) 456-7890"
        state={state}
        handleChange={handleChange}
        isValid={isValid(state)}
        initialRender={initialRender}
      />
      {!initialRender.current && !isValid(state) && (
        <ErrorMessage>
          <span>{errorMessage(state)}</span>
        </ErrorMessage>
      )}
    </li>
  );
};
