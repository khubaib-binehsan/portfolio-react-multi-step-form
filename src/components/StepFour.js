import { FormContainer } from "./FormContainer";
import {
  useAddons,
  useData,
  usePlan,
  useStep,
  useSubscription,
} from "./MyProvider";

export const StepFour = () => {
  const data = useData();
  const { addons } = useAddons(); // returns an array of addon keys
  const { subscriptionType } = useSubscription();

  const addonsArray = data[subscriptionType].addons;

  return (
    <FormContainer>
      <div>
        <h1 className="text-MarineBlue">Finishing up</h1>
        <p className="pr-10">
          Double check everything looks OK before confirming
        </p>
        <ul className="flex flex-col mt-4 bg-Alabaster rounded-xl p-1">
          <PlanHeading data={data} subscriptionType={subscriptionType} />

          {addons.length > 0 && (
            <hr className="mx-2 my-1 h-[4px] border-slate-300"></hr>
          )}

          {addons?.map((addon) => (
            <Addons key={addon} addon={addonsArray[addon]} />
          ))}
        </ul>
        <TotalRow />
      </div>
    </FormContainer>
  );
};

function PlanHeading({ data, subscriptionType }) {
  const { plan } = usePlan();
  const { setOnStep } = useStep();

  const relevantPlan = data[subscriptionType].plans[plan];
  const priceTag = relevantPlan.price;

  return (
    <Row
      leftSection={
        <>
          <h4 className="text-MarineBlue -mb-2">{`${
            relevantPlan.name
          } (${subscriptionType
            .slice(0, 1)
            .toUpperCase()}${subscriptionType.slice(1)})`}</h4>
          <button
            className="underline text-[13px]"
            onClick={() => setOnStep(2)}
          >
            Change
          </button>
        </>
      }
      rightSection={
        <span className="font-bold text-lg">{`$${priceTag}/${
          subscriptionType == "monthly" ? "mo" : "yr"
        }`}</span>
      }
    />
  );
}

function Addons({ addon }) {
  const { subscriptionType } = useSubscription();
  return (
    <Row
      leftSection={addon.name}
      rightSection={
        <span>{`+$${addon.price}/${
          subscriptionType == "monthly" ? "mo" : "yr"
        }`}</span>
      }
    />
  );
}

function TotalRow({ totalPrice }) {
  const data = useData();
  const { plan } = usePlan();
  const { subscriptionType } = useSubscription();
  const { addons } = useAddons();

  function totalPrice() {
    const relevantAddons = data[subscriptionType].addons;
    const planPrice = data[subscriptionType].plans[plan].price;

    let addonsPrice = 0;
    addons.forEach((addon) => (addonsPrice += relevantAddons[addon].price));

    return planPrice + addonsPrice;
  }
  return (
    <Row
      leftSection={`Total (per ${
        subscriptionType == "monthly" ? "month" : "year"
      })`}
      rightSection={
        <span className="text-PurplishBlue font-bold text-xl">{`$${totalPrice()}/${
          subscriptionType == "monthly" ? "mo" : "yr"
        }`}</span>
      }
      classModifier="mt-2"
    />
  );
}

function Row({ leftSection, rightSection, classModifier = "" }) {
  const baseClass = "flex rounded-lg px-2 py-[6px] " + classModifier;
  return (
    <li className={baseClass}>
      <div className="grow">{leftSection}</div>
      <p className="text-MarineBlue font-medium">{rightSection}</p>
    </li>
  );
}
