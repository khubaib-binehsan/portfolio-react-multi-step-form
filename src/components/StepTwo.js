import { FormContainer } from "./FormContainer";
import { useData, usePlan, useSubscription } from "./MyProvider";
import arcadeLogo from "../assets/images/icon-arcade.svg";
import advancedLogo from "../assets/images/icon-advanced.svg";
import proLogo from "../assets/images/icon-pro.svg";

const assets = {
  arcade: arcadeLogo,
  advanced: advancedLogo,
  pro: proLogo,
};

export const StepTwo = () => {
  const { setPlan } = usePlan();
  const { subscriptionType } = useSubscription(); // initially set to monthly in App.js
  const data = useData(); // returns the original unfiltered data

  const relevantPlans = Object.values(data[subscriptionType].plans);

  return (
    <FormContainer>
      <h1 className="text-MarineBlue">Select your plan</h1>
      <p className="pr-10">You have the option of monthly or yearly billing.</p>
      <ul className="flex flex-col gap-4 mt-6 md:flex-row">
        {relevantPlans?.map((plan) => (
          <IndividualPlan
            key={plan.id}
            planId={plan.id}
            imageSrc={assets[plan.id]}
            planName={plan.name}
            planType={subscriptionType}
            planBill={`$${plan.price}/${
              subscriptionType == "monthly" ? "mo" : "yr"
            }`}
            additionalNote={subscriptionType == "yearly" && plan.additionalNote}
            handleClick={() => setPlan(plan.id)}
          />
        ))}
      </ul>
      <PlanTypeSwitch />
    </FormContainer>
  );
};

function IndividualPlan({
  imageSrc,
  planId,
  planName,
  planBill,
  additionalNote,
  planType,
  handleClick,
}) {
  const { plan } = usePlan();
  const isCurrentPlanSelected = plan == planId;
  const baseClasses =
    "list-none flex gap-2 items-center border-[1px] rounded-lg py-3 px-6 hover:cursor-pointer md:min-h-24 md:w-full md:p-4 md:my-6";
  const ifSelectedClasses = baseClasses + " border-PurplishBlue bg-Alabaster";
  const ifNotSelectedClasses = baseClasses + " border-slate-200";
  return (
    <li
      className={
        isCurrentPlanSelected ? ifSelectedClasses : ifNotSelectedClasses
      }
      onClick={handleClick}
    >
      <input
        className="absolute -left-[9999px]"
        type="radio"
        name="plan"
        value={planName}
      ></input>
      <label className="flex gap-4 md:flex-col" htmlFor="">
        <img className="size-12" src={imageSrc} alt="" />
        <div>
          <h5 className="text-MarineBlue -mb-[1px]">{planName}</h5>
          <p className="text-sm">{planBill}</p>
          {planType === "yearly" && (
            <p className="text-xs text-MarineBlue mt-[1px]">{additionalNote}</p>
          )}
        </div>
      </label>
    </li>
  );
}

function PlanTypeSwitch() {
  const { subscriptionType } = useSubscription();
  const activeSubscription = "font-bold text-MarineBlue";

  return (
    <div className="bg-Alabaster rounded-md mt-4 text-center leading-[2.5] h-10 flex items-center justify-center">
      <span className={subscriptionType == "monthly" ? activeSubscription : ""}>
        Monthly
      </span>
      <ToggleButton />
      <span className={subscriptionType == "yearly" ? activeSubscription : ""}>
        Yearly
      </span>
    </div>
  );
}

function ToggleButton() {
  const { subscriptionType, setSubscriptionType } = useSubscription();
  const handleClick = () => {
    if (subscriptionType == "monthly") setSubscriptionType("yearly");
    if (subscriptionType == "yearly") setSubscriptionType("monthly");
  };

  const baseClass =
    "relative p-[3px] mx-4 w-9 h-5 bg-MarineBlue rounded-full before:h-[100%] before:aspect-square before:block before:bg-white before:rounded-full";
  const left = baseClass + " before:mr-auto";
  const right = baseClass + " before:ml-auto";
  return (
    <button
      className={subscriptionType == "monthly" ? left : right}
      onClick={handleClick}
    ></button>
  );
}
