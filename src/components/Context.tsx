import React, { createContext, useState } from "react";

interface IAppState {
  diplayModal: boolean;
  actualPlace: {
    id: number;
    name: string;
  } | null;
}

interface IPropsAppContext {
  state: IAppState;
  setState: React.Dispatch<React.SetStateAction<IAppState>>;
}

const APP_DEFAULT = {
  state: {
    diplayModal: false,
    actualPlace: null,
  },
  setState: () => {},
};

const AppContext = createContext<IPropsAppContext>(APP_DEFAULT);

const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(APP_DEFAULT.state);
  return (
    <AppContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContextProvider };
export default AppContext;
