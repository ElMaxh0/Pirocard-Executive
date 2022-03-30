import React, { createContext, useContext, useState } from "react";
export const EntradasContext = createContext();
export default function EntradasProvider({children}){
    const[Entradas, setEntradas]= useState(0);
    return <EntradasContext.Provider value={{Entradas,setEntradas}}>{children}</EntradasContext.Provider>
}
export function useEntradas(){
    const context= useContext(EntradasContext)
    const {Entradas, setEntradas} = context;
    return {Entradas, setEntradas}

}