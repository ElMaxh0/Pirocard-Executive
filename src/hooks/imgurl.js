import React, { createContext, useContext, useState } from "react";
export const ImgUrlContext = createContext();
export default function ImgUrlProvider({children}){
    const[ImgUrl, setImgUrl]= useState("https://123alehot.net.br/wp-content/uploads/2022/03/cropped-Desenho-30.png");
    return <ImgUrlContext.Provider value={{ImgUrl,setImgUrl}}>{children}</ImgUrlContext.Provider>
}
export function useImgUrl(){
    const context= useContext(ImgUrlContext)
    const {ImgUrl, setImgUrl} = context;
    return {ImgUrl, setImgUrl}

}