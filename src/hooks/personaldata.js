import React, { createContext, useContext, useState } from "react";

var entradapersonal ={id: 1, nome: 'Um Nome ', sobrenome: "Legal =D",apelido:"Um apelido Legal ", datanasc:"10/5/2010", cell:"+5511123456789", email:"umemaillegal@gmail.com", andress:"Rua 123 Piranga ", link:"http://allmylinks.com/linktotal" }


export const PersonalInfoContext = createContext();
export default function PersonalInfoProvider({children}){
    const[PersonalInfo, setPersonalInfo]= useState(entradapersonal);
    return <PersonalInfoContext.Provider value={{PersonalInfo,setPersonalInfo}}>{children}</PersonalInfoContext.Provider>
}
export function usePersonalInfo(){
    const context= useContext(PersonalInfoContext)
    const {PersonalInfo, setPersonalInfo} = context;
    return {PersonalInfo, setPersonalInfo}

}