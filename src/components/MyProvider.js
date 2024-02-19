import { createContext, useContext } from "react";

const DataContext = createContext({});
const OnStepContext = createContext({});
const ValidationContext = createContext({});
const UserContext = createContext({});
const SubscriptionTypeContext = createContext({});
const PlanContext = createContext({});
const AddonsContext = createContext({});

export const MyProvider = ({
  children,
  dataContext,
  onStepContext,
  validationContext,
  userContext,
  subscriptionTypeContext,
  planContext,
  addonContext,
}) => {
  return (
    <DataContext.Provider value={dataContext}>
      <OnStepContext.Provider value={onStepContext}>
        <ValidationContext.Provider value={validationContext}>
          <UserContext.Provider value={userContext}>
            <SubscriptionTypeContext.Provider value={subscriptionTypeContext}>
              <PlanContext.Provider value={planContext}>
                <AddonsContext.Provider value={addonContext}>
                  {children}
                </AddonsContext.Provider>
              </PlanContext.Provider>
            </SubscriptionTypeContext.Provider>
          </UserContext.Provider>
        </ValidationContext.Provider>
      </OnStepContext.Provider>
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};

export const useStep = () => {
  return useContext(OnStepContext);
};

export const useValidation = () => {
  return useContext(ValidationContext);
};

export const useUser = () => {
  return useContext(UserContext);
};

export const useSubscription = () => {
  return useContext(SubscriptionTypeContext);
};

export const usePlan = () => {
  return useContext(PlanContext);
};

export const useAddons = () => {
  return useContext(AddonsContext);
};
