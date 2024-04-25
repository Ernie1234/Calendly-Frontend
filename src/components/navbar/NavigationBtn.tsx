import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "../ui/button";

function NavigationBtn() {
  const { loginWithRedirect, isAuthenticated, isLoading, logout } = useAuth0();

  const LoggedInBtn = () => {
    return (
      <>
        <Button
          size="sign"
          className="py-3 px-5 text-lg font-semibold"
          onClick={async () => {
            await logout();
            // TODO: to be set to profile later
          }}
        >
          my account
        </Button>
      </>
    );
  };
  const LogInBtn = () => {
    return (
      <>
        <Button
          size="sign"
          variant="ghost"
          className="py-3 px-5 text-lg font-semibold text-[#0b3558] bg-gray-50 capitalize"
          onClick={async () => await loginWithRedirect()}
        >
          log in
        </Button>
        <Button size="sign" className="py-3 px-5 text-lg font-semibold">
          Get started
        </Button>
      </>
    );
  };

  console.log(isAuthenticated, isLoading);
  return (
    <div className="hidden sm:flex justify-center items-center gap-4">
      {!isLoading && isAuthenticated ? <LoggedInBtn /> : <LogInBtn />}
    </div>
  );
}

export default NavigationBtn;
