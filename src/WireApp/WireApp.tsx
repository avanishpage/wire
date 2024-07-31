import React from "react";
import { WireContextProvider } from "./WireAppContext";

export const WireApp = (): JSX.Element => {
  return (
    <>
      {/* wrapping our app in context. 
      context helps the data to flow seamlessly between the components wrapped in it. 
      this prevents the use of prop ladder (bad practice and is a dom heavy thing if not regulated correctly)*/}
      <WireContextProvider message="">
        <p className="font-sans"> Wire First Draft ;-)</p>
      </WireContextProvider>
    </>
  );
};
