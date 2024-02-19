export const InputField = ({
  name,
  type,
  title,
  placeholder,
  state,
  handleChange,
  isValid,
  initialRender,
}) => {
  const baseClass =
    "border-slate-300 shadow-none rounded-md border-[1px] leading-10 w-full px-4 text-MarineBlue font-medium tracking-normal focus:border-PurplishBlue focus:outline-none";
  const invalidInputClass = baseClass + " border-red-400";
  return (
    <div>
      <p className="font-normal text-sm text-MarineBlue tracking-tighter capitalize md:mb-1">
        {title}
      </p>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={state}
        onChange={handleChange}
        className={
          !initialRender.current && !isValid ? invalidInputClass : baseClass
        }
      />
    </div>
  );
};
