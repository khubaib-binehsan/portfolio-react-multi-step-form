import { useStep, useValidation } from "./MyProvider";

const BackButton = ({ onClick }) => {
  return (
    <button
      className="min-w-16 px-4 text-CoolGray text-sm font-medium leading-9 hover:underline md:leading-[3]"
      onClick={onClick}
    >
      Go Back
    </button>
  );
};

const NextButton = ({ name, onClick, state }) => {
  const baseClass =
    "ml-auto text-White text-sm text-center min-w-16 px-4 leading-9 rounded-md md:leading-[3]";
  const validClass =
    baseClass +
    ` ${name.toLowerCase() == "confirm" ? "bg-PurplishBlue" : "bg-MarineBlue"}`;
  const invalidClass = baseClass + " bg-CoolGray";
  return (
    <button className={state ? validClass : invalidClass} onClick={onClick}>
      {name}
    </button>
  );
};

export const Footer = () => {
  const { isValid } = useValidation();
  const { onStep, setOnStep } = useStep();

  function handleNext() {
    if (isValid && onStep < 5) setOnStep(onStep + 1);
  }

  function handleBack() {
    if (onStep > 1) setOnStep(onStep - 1);
  }

  return (
    <footer className="mt-auto md:pt-12 text-center flex justify-between p-4 bg-White">
      {onStep > 1 && <BackButton onClick={handleBack} />}
      <NextButton
        name={onStep < 4 ? "Next Step" : "Confirm"}
        onClick={handleNext}
        state={isValid}
      />
    </footer>
  );
};
