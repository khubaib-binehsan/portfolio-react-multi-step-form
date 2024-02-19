import { InputField } from "./InputField";
import { ErrorMessage } from "./ErrorMessage";
import { useRef } from "react";
import { useUser } from "../MyProvider";

export const UsernameInput = () => {
  const { userDetails, setUserDetails } = useUser();
  const initialRender = useRef(true);

  function errorMessage(input) {
    const START_BLANK_CHECK = /^\s/;
    const ALPHABET_CHECK = /^[a-zA-Z]+$/;
    /*
      Error Types:
        "a1"  contains non-alphabet characters
        " a"  starts with a blank
    */

    if (input.length === 0) return "Username cannot be blank";
    if (START_BLANK_CHECK.test(input))
      return "Username cannot start with a blank";
    if (!ALPHABET_CHECK.test(input.replaceAll(" ", "")))
      return "Username can only contain non-numerical characters";
    return "";
  }

  function isValid(param) {
    return !errorMessage(param) ? true : false;
  }

  function setState(update, state) {
    setUserDetails({
      ...state,
      name: {
        value: update,
        isValid: isValid(update),
      },
    });
  }

  function handleChange(e) {
    // setState(e.target.value);
    const update = e.target.value;
    setState(update, userDetails);
    initialRender.current = false;
  }

  const state = userDetails.name.value;

  return (
    <li className="list-none">
      <InputField
        name="name"
        type="text"
        title="Name"
        placeholder="e.g. Stephen King"
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
