export const FormContainer = ({ children }) => {
  return (
    <div className="relative -top-16 md:top-0 left-0 w-full h-full px-5 md:p-0">
      <div className="container h-full bg-White py-10 px-6 md:p-0 rounded-lg shadow-trial md:shadow-none md:mt-8 text-CoolGray">
        {children}
      </div>
    </div>
  );
};
