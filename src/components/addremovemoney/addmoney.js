import React from "react";
import { useContent } from "../../hooks/contentid";
import { useTransacrions } from "../../hooks/transactions";
import { useTransacrionsout } from "../../hooks/transactionsout";

export function AddMoney(){
    const {Transacrions, setTransacrions} = useTransacrions();
    const {Transacrionsout, setTransacrionsout} = useTransacrionsout();
    const {content, setContent} = useContent();
    function AddFundos() {
        var totalcarcteries = Transacrions.length
        var novaentrada  = {
            "id" : (totalcarcteries + 1),
            "title" : prompt("Insira o titulo do valor a adicionar "),
            "valor" : prompt("Insira o valor a adicionar "),
        };
    
        function a (Transacrions , novaentrada){
            return Transacrions.push(novaentrada)
        }
        return a(Transacrions,novaentrada);
    }
    function update(){
        AddFundos()
        setContent(Math.random() * (3999 - 1999) + 1999)
    }
return update()    
}