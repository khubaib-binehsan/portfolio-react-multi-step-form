export const ErrorMessage = ({ children }) => {
  return (
    <p className="errorMessage text-xs text-red-400 tracking-tight mt-1">
      {children}
    </p>
  );
};
