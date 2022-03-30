import React, { createContext, useContext, useState } from "react";
export const ContentContext = createContext("1");
export default function ContentProvider({children}){
    const[content, setContent]= useState(0);
    return <ContentContext.Provider value={{content,setContent}}>{children}</ContentContext.Provider>
}
export function useContent(){
    const context= useContext(ContentContext)
    const {content, setContent} = context;
    return {content, setContent}

}