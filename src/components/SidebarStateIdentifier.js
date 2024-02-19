import { useStep } from "./MyProvider";

const StateIdentifier = [
  { key: 1, id: "Step 1", name: "Your Info" },
  { key: 2, id: "Step 2", name: "Select Plan" },
  { key: 3, id: "Step 3", name: "Add-Ons" },
  { key: 4, id: "Step 4", name: "Summary" },
];

export const SidebarStateIdentifier = () => {
  return (
    <div className="mt-12 flex justify-center gap-4 md:flex-col md:px-6 md:gap-8">
      {StateIdentifier?.map((stepState) => (
        <Step
          key={stepState.key}
          value={stepState.key}
          stepName={stepState.name}
        />
      ))}
    </div>
  );
};

function Step({ value, stepName }) {
  const { onStep } = useStep();
  const isCurrent = Number(value) == onStep;
  const baseClasses =
    "size-9 border-[1px] rounded-[40px] text-center text-lg leading-8";
  const onactiveClasses =
    baseClasses + " text-black bg-PastelBlue border-PastelBlue font-medium";
  const inactiveClasses = baseClasses + " border-White text-White";
  return (
    <div className="flex items-center gap-2 text-White">
      <div className={isCurrent ? onactiveClasses : inactiveClasses}>
        {value}
      </div>
      <div className="max-md:hidden">
        <p className="text-[12px] font-thin tracking-wide">{`STEP ${value}`}</p>
        <p className="text-sm font-medium tracking-widest">
          {stepName.toUpperCase()}
        </p>
      </div>
    </div>
  );
}
