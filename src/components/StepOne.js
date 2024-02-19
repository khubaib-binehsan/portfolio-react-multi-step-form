import { useEffect, useState } from "react";
import { FormContainer } from "./FormContainer";
import { UsernameInput } from "./FormComponents/UsernameInput";
import { EmailInput } from "./FormComponents/EmailInput";
import { PhoneInput } from "./FormComponents/PhoneInput";
import { useUser, useValidation } from "./MyProvider";

export const StepOne = () => {
  const { userDetails } = useUser();
  const { setIsValid } = useValidation();

  useEffect(() => {
    let validator = true;
    for (const item of Object.values(userDetails)) {
      validator = validator && item.isValid;
    }
    setIsValid(validator);
  });

  return (
    <FormContainer>
      <h1 className="text-MarineBlue">Personal Info</h1>
      <p className="pr-10">
        Please provide your name, email address and phone number
      </p>
      <ul className="flex flex-col gap-y-3 mt-6">
        <UsernameInput />
        <EmailInput />
        <PhoneInput />
      </ul>
    </FormContainer>
  );
};
