import { useState } from "react";
import { FormContainer } from "./FormContainer";
import { useAddons, useData, useSubscription } from "./MyProvider";

export const StepThree = () => {
  const data = useData();
  const { subscriptionType } = useSubscription();
  const addonsArray = Object.values(data[subscriptionType].addons);

  return (
    <FormContainer>
      <h1 className="text-MarineBlue">Pick add-ons</h1>
      <p className="pr-10">Add-ons help enhance your gaming experience</p>
      <ul className="flex flex-col gap-4 mt-6">
        {addonsArray?.map((addon) => (
          <InputCheckbox
            key={addon.id}
            inputID={addon.id}
            name={addon.name}
            details={addon.details}
            price={`+$${addon.price}/${
              subscriptionType == "monthly" ? "mo" : "yr"
            }`}
          />
        ))}
      </ul>
    </FormContainer>
  );
};

function InputCheckbox({ inputID, name, details, price }) {
  const { addons, setAddons } = useAddons();

  function handleClick(e) {
    e.preventDefault();
    if (addons.length > 0) {
      if (addons.find((item) => item == inputID)) {
        setAddons(addons.filter((item) => item !== inputID));
      } else {
        setAddons([...addons, inputID]);
      }
    } else {
      setAddons([...addons, inputID]);
    }
  }

  const isChecked = addons?.some((item) => item === inputID);

  // CSS
  const baseClass =
    "flex border-[1px] py-3 px-5 md:py-4 md:px-6 text-sm rounded-lg hover:cursor-pointer";
  const uncheckedbox =
    "size-5 aspect-square rounded mr-2 border-slate-400 border-[1px]";
  const checkedbox =
    "size-5 aspect-square bg-PurplishBlue text-center p-[2px] before:inline-block before:size-full before:bg-checked before:bg-no-repeat before:bg-contain rounded mr-2 border-PurplishBlue border-[1px]";

  const isSelectedClass = baseClass + " border-PurplishBlue bg-Alabaster";
  const notSelectedClass = baseClass + " border-slate-200";

  return (
    <li
      className={isChecked ? isSelectedClass : notSelectedClass}
      onClick={handleClick}
    >
      <input
        type="checkbox"
        name="addons"
        id={inputID}
        className="size-5 checked:bg-StrawberryRed absolute -left-[9999px]"
      />
      <label
        htmlFor={inputID}
        className="w-full flex items-center gap-2 hover:cursor-pointer"
      >
        <span className={isChecked ? checkedbox : uncheckedbox}></span>
        <div className="grow">
          <h6 className="text-MarineBlue -mb-[1px] font-medium">{name}</h6>
          <p className="text-xs">{details}</p>
        </div>
        <p className="text-PurplishBlue font-medium">{price}</p>
      </label>
    </li>
  );
}
