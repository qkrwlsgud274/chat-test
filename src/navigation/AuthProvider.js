import React, { createContext, useState } from 'react';

import { firebase } from '../firebase';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
      <AuthContext.Provider
          value={{
            user,
            setUser,
            loading,
            setLoading,
            login: async (email, password) => {
              // TODO
            },
            register: async (displayName, email, password) => {
              setLoading(true);

              try {
                await firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then((credential) => {
                  credential.user
                  .updateProfile({ displayName: displayName })
                  .then(async () => {
                    // TODO start a user chat session and log the user in
                  });
                });
              } catch (e) {
                console.log(e);
              }

              setLoading(false);
            },
            logout: async () => {
              // TODO
            },
          }}
      >
        {children}
      </AuthContext.Provider>
  );
};