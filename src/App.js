import { useEffect, useMemo, useState } from "react";
import myjson from "./data.json";
import { MyProvider } from "./components/MyProvider";
import { Footer } from "./components/Footer";
import { SideBar } from "./components/SideBar";
import { StepFive } from "./components/StepFive";
import { StepFour } from "./components/StepFour";
import { StepOne } from "./components/StepOne";
import { StepThree } from "./components/StepThree";
import { StepTwo } from "./components/StepTwo";

/*
  - onStep state that tells you on what step you are, it will be passed to sidebar component and then to footer for navigation
  - There are three steps:
    - One: Three inputs are name, email, phone
    - Two: has two inputs, one whether the plan is monthly or yearly and second one is the type of plan you are going to use. From step two onwards, you need the monthly/yearly state.
    - Three: has one state that contains the addons that are selected by the user.
  - Each step has some inputs that need to be stored some way in a global state so that all of those inputs can then be combined together to post to the server.
  - 
  - StepOne has three input steps, and you cannot go from p
*/

function App() {
  const [data, setData] = useState(() => myjson);
  const [onStep, setOnStep] = useState(1); // replace with useReducer
  const [userDetails, setUserDetails] = useState({
    name: { value: "", isValid: false },
    email: { value: "", isValid: false },
    phone: { value: "", isValid: false },
  });
  const [subscriptionType, setSubscriptionType] = useState("monthly");
  const [plan, setPlan] = useState(
    () => Object.values(myjson[subscriptionType].plans)[0].id
  );
  const [addons, setAddons] = useState([]);
  const [isValid, setIsValid] = useState(true);

  return (
    <div className="min-w-screen min-h-screen w-full h-full flex font-ubuntu bg-Magnolia tracking-tight md:p-10">
      <div
        className="
          CONTAINER relative min-h-screen flex flex-col m-auto max-w-[450px]
          md:max-w-[1000px] md:w-full md:bg-White md:grid md:grid-cols-12 md:min-h-[575px] md:p-4 md:rounded-xl
        "
      >
        <MyProvider
          dataContext={data}
          onStepContext={{ onStep, setOnStep }}
          validationContext={{ isValid, setIsValid }}
          userContext={{ userDetails, setUserDetails }}
          subscriptionTypeContext={{ subscriptionType, setSubscriptionType }}
          planContext={{ plan, setPlan }}
          addonContext={{ addons, setAddons }}
        >
          <SideBar onStep={onStep} />
          <div className="grow h-full flex flex-col col-span-8 lg:col-span-9 md:px-5 md:max-w-[500px] md:w-full md:mx-auto">
            {onStep == 1 && <StepOne />}
            {onStep == 2 && <StepTwo />}
            {onStep == 3 && <StepThree />}
            {onStep == 4 && <StepFour />}
            {onStep == 5 && <StepFive />}
            {onStep !== 5 && <Footer />}
          </div>
        </MyProvider>
      </div>
    </div>
  );
}

export default App;
