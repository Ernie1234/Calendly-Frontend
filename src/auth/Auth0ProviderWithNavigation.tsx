import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

interface Props {
  children: React.ReactNode;
}

function Auth0ProviderWithNavigation({ children }: Props) {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENTID;
  const redirectUrl = import.meta.env.VITE_AUTH0_REDICRECTURI;

  if (!domain || !clientId || !redirectUrl) {
    throw new Error("Missing Auth0 configuration");
  }
  const onRedirectCallback = (appstate?: AppState, user?: User) => {
    console.log(user);
  };
  return (
    <Auth0Provider
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUrl }}
      domain={domain}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}

export default Auth0ProviderWithNavigation;
