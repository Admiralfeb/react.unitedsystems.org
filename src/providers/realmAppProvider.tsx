import { createContext, useEffect, useState } from 'react';
import * as Realm from 'realm-web';

export interface IRealmContext {
  currentUser: Realm.User<globalThis.Realm.DefaultFunctionsFactory, any> | null;
  logInAnon: () => Promise<void>;
  logOut: () => Promise<void>;
  app: Realm.App;
}

export const RealmAppContext = createContext<IRealmContext | null>(null);

export const RealmAppProvider = (props: {
  appId: string;
  children: React.ReactNode;
}) => {
  const { appId, children } = props;
  const [app, setApp] = useState(new Realm.App(appId));
  useEffect(() => {
    setApp(new Realm.App(appId));
  }, [appId]);

  // Wrap the Realm.App object's user state with React state
  const [currentUser, setCurrentUser] = useState(app.currentUser);
  async function logInAnon() {
    await app.logIn(Realm.Credentials.anonymous());
    // If successful, app.currentUser is the user that just logged in
    setCurrentUser(app.currentUser);
  }
  async function logOut() {
    // Log out the currently active user
    await app.currentUser?.logOut();
    // If another user was logged in too, they're now the current user.
    // Otherwise, app.currentUser is null.
    setCurrentUser(app.currentUser);
  }
  const wrapped = { app, currentUser, logInAnon, logOut };
  return (
    <RealmAppContext.Provider value={wrapped}>
      {children}
    </RealmAppContext.Provider>
  );
};
