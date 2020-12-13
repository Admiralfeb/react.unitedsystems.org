import { useRealmApp } from './useRealmApp';

export const useAnonLogin = async () => {
  const app = useRealmApp();
  await app.logInAnon();
};
