import React, { createContext, useEffect, useReducer } from "react";

type WireContextType = {
  //add needed keys here
  message?: string;
  wireDispatch: React.Dispatch<WireContextActions>;
};

type WireProviderProps = {
  message?: string;
  children: React.ReactNode;
};

type WireContextActions = {
  type: "UPDATE_MESSAGE";
  message: string | undefined;
};

const WireReducer: React.Reducer<WireContextType, WireContextActions> = (
  prevState,
  action
) => {
  switch (action.type) {
    case "UPDATE_MESSAGE":
      return {
        ...prevState,
        message: action.message,
      };
    // add more cases as needed. (incase you add more keys)
  }
};

export const WireContext = createContext({} as WireContextType);
export const WireContextProvider = ({
  message,
  children,
}: WireProviderProps) => {
  const [state, wireDispatch] = useReducer(WireReducer, {
    message: message,
    wireDispatch: () => undefined,
  });

  useEffect(() => {
    wireDispatch({ type: "UPDATE_MESSAGE", message });
  }, [message]);

  //   more useEffects for indivisual keys

  return (
    <WireContext.Provider value={{ ...state, wireDispatch }}>
      {children}
    </WireContext.Provider>
  );
};
