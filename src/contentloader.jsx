import React from "react";
import { Account } from "./components/accountdata/account";
import { Dashboard } from "./dashboard/dash";
import { useContent } from "./hooks/contentid";
export function LoadContent(){
    const {content, setContent} = useContent();
    console.log(content)
    switch (content) {
        case 1:
          return < Account />
          break;
        case 999:
            return (<></>)
            break;
      
        default:
            return < Dashboard />
          break;
      }
}