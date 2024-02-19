import { FormContainer } from "./FormContainer";
import thankyouLogo from "../assets/images/icon-thank-you.svg";

export const StepFive = () => {
  return (
    <FormContainer>
      <div className="text-center h-full md:flex md:flex-col md:justify-center md:-mt-8">
        <img src={thankyouLogo} className="m-auto md:mx-auto md:my-0" alt="" />
        <h1 className="text-MarineBlue my-3">Thank you!</h1>
        <p className="px-3">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </FormContainer>
  );
};
