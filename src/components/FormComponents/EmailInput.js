// import { InputField } from "./InputField";

// export const EmailInput = () => {
//   return (
//     <InputField
//       name="email"
//       type="email"
//       title="Email Address"
//       placeholder="e.g. stephenking@lorem.com"
//       // state={email}
//       // handleChange={setEmail}
//     />
//   );
// };

import { InputField } from "./InputField";
import { ErrorMessage } from "./ErrorMessage";
import { useRef } from "react";
import { useUser } from "../MyProvider";

export const EmailInput = () => {
  const { userDetails, setUserDetails } = useUser();
  const initialRender = useRef(true);

  function errorMessage(input) {
    /*
      Error Types:
        "a1"  contains non-alphabet characters
        " a"  starts with a blank
    */

    const EMAIL_CHECK =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (input.length === 0) return "Email address cannot be blank";
    if (!input.match(EMAIL_CHECK)) return "Invalid email address";

    return "";
  }

  function isValid(param) {
    return !errorMessage(param) ? true : false;
  }

  function setState(update, state) {
    setUserDetails({
      ...state,
      email: {
        value: update,
        isValid: isValid(update),
      },
    });
  }

  function handleChange(e) {
    const update = e.target.value;
    setState(update, userDetails);
    initialRender.current = false;
  }

  const state = userDetails.email.value;

  return (
    <li className="list-none">
      <InputField
        name="email"
        type="email"
        title="Email Address"
        placeholder="e.g. example@lorem.com"
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
