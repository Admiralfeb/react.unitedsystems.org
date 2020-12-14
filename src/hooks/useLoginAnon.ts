import { useEffect } from 'react';
import { useRealmApp } from './useRealmApp';

export const useLoginAnon = () => {
  const realm = useRealmApp();
  useEffect(() => {
    console.log(realm.currentUser);
    if (realm.currentUser === null) {
      realm
        .logInAnon()
        .then((_) => console.log(realm.currentUser))
        .catch((reason) => console.log(reason));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
