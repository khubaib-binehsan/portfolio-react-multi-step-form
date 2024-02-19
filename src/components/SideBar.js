import { useStep } from "./MyProvider";
import { SidebarStateIdentifier } from "./SidebarStateIdentifier";

export const SideBar = () => {
  const { onStep } = useStep();
  return (
    <div
      className="
          bg-mobileBackgroundIndexContainer bg-PurplishBlue bg-no-repeat bg-bottom bg-cover h-44 md:bg-desktopBackgroundIndexContainer md:bg-cover lg:bg-contain
          md:h-full md:rounded-lg md:col-span-4 lg:col-span-3
        "
    >
      {onStep < 5 && <SidebarStateIdentifier />}
    </div>
  );
};
