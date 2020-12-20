export interface IRealmContext {
  currentUser: Realm.User<globalThis.Realm.DefaultFunctionsFactory, any> | null;
  logInAnon: () => Promise<void>;
  logOut: () => Promise<void>;
  app: Realm.App | undefined;
}
