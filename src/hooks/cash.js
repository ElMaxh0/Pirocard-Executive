import React, { createContext, useContext, useState } from "react";
import { useEntradas } from "./entradas";
import { useSaidas } from "./saidasall";
import { useTransacrions } from "./transactions";
import { useTransacrionsout } from "./transactionsout";


export const CashContext = createContext();
export default function CashProvider({children}){
    const[Cash, setCash]= useState(344);
    return <CashContext.Provider value={{Cash,setCash}}>{children}</CashContext.Provider>
}
export function TotalCash (){
    const {Cash, setCash} = useCash();
    const {Transacrionsout, setTransacrionsout} = useTransacrionsout();
    const {Transacrions, setTransacrions} = useTransacrions();
    var totalin = Transacrions.reduce(gettotalin, 0);
    function gettotalin(totalin, data) {
     return totalin + (data.valor);
    }
    var totalout = Transacrionsout.reduce(gettotalout, 0);
    function gettotalout(totalout, data) {
     return totalout + (data.valor);

    }
    console.log(totalout)
    console.log(totalin)
    console.log(totalin+"/"+totalout +"/"+(totalin-totalout))
    const {Entradas, setEntradas} = useEntradas();
    const {Saidas, setSaidas} = useSaidas();
    setEntradas(totalin)
    setSaidas(totalout)
    console.log(Transacrions)
    setCash((totalin-totalout))
    return (totalin-totalout)
}
export function useCash(){
    const context= useContext(CashContext)
    const {Cash, setCash} = context;
    return {Cash, setCash}

}