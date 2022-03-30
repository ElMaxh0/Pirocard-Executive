import React, { createContext, useContext, useState } from "react";
export const SaidasContext = createContext();
export default function SaidasProvider({children}){
    const[Saidas, setSaidas]= useState(344);
    return <SaidasContext.Provider value={{Saidas,setSaidas}}>{children}</SaidasContext.Provider>
}
export function useSaidas(){
    const context= useContext(SaidasContext)
    const {Saidas, setSaidas} = context;
    return {Saidas, setSaidas}

}