import React from "react";
import { useTransacrions } from "../../hooks/transactions";
import { useTransacrionsout } from "../../hooks/transactionsout";
import { transacoesentrada } from "../../hooks/transactions";
import { useContent } from "../../hooks/contentid";
export function Extract(){
    const {Transacrions, setTransacrions} = useTransacrions();
    const {Transacrionsout, setTransacrionsout} = useTransacrionsout();
    const {content, setContent} = useContent();


    function AddFundos(){
        function AddFundos() {
            var totalcarcteries = Transacrions.length
            var novaentrada  = {
                "id" : (totalcarcteries + 1),
                "title" : prompt("Insira o titulo do valor a adicionar "),
                "valor" : Number(prompt("Insira o valor a adicionar ")),
            };
    
            function a (Transacrions , novaentrada){
                return Transacrions.push(novaentrada)
            }
            return a(Transacrions,novaentrada);
        }
        AddFundos()
        setContent(Math.random() * (3999 - 1999) + 1999)
    }
    
    function RemoveFundos (){
        function AddFundos() {
            var totalcarcteries = Transacrionsout.length
            var novaentrada  = {
                "id" : (totalcarcteries + 1),
                "title" : prompt("Insira o titulo do valor a Remover "),
                "valor" : Number(prompt("Insira o valor a Remover ")),
            };
    
            function a (Transacrionsout , novaentrada){
                return Transacrionsout.push(novaentrada)
            }
            return a(Transacrionsout,novaentrada);
        }
        AddFundos()
        setContent(Math.random() * (3999 - 1999) + 1999)
    }
    return(
        <>
        <div>
            <div>
                <div style={{
                    padding:"1%",
                    backgroundColor:"rgba(25,25,25,1)",
                    color:"rgba(255,245,244,1)",
                    borderRadius:"25px",
                    textAlign:"left",
                    margin:"5%",

                }}>
                    <h1 style={{
                       padding:"1%",
                       marginLeft:"5%",
                       width:"80%",
                       height:"auto",
                       float:"left",
                    }}> Ultimas Entradas </h1>
                    <button className={"botaodagloriosa botaodagloriosaazul"}  onClick={() => { AddFundos() }}>Adiconar Novo</button>
                    <div style={{
                        backgroundColor:"rgba(20,20,20,1)",
                        borderRadius:"25px",

                    }}>
                        <table style={{
                            width:"100%",
                            padding:"5%",
                            fontSize:"1.2rem",
                        }}>
                            <tr><td>ID </td><td>Transação </td><td>Valor</td></tr>
                            {Transacrions.map((Transacrion) => <>
                            <tr><td>{Transacrion.id}</td><td>{Transacrion.title}</td><td>R$ {Transacrion.valor}</td></tr>
                            </>)}
                        </table>
                    </div>
                </div>
            </div>
            <div>
                <div style={{
                    padding:"1%",
                    backgroundColor:"rgba(25,25,25,1)",
                    color:"rgba(255,245,244,1)",
                    borderRadius:"25px",
                    textAlign:"left",
                    margin:"5%",

                }}>
                    <h1 style={{
                       padding:"1%",
                       marginLeft:"5%",
                       width:"80%",
                       height:"auto",
                       float:"left", 
                    }}> Ultimas Saidas</h1>
                    <button className={"botaodagloriosa botaodagloriosaazul"}  onClick={() => { RemoveFundos() }}>Adiconar Novo</button>

                    <div style={{
                        backgroundColor:"rgba(20,20,20,1)",
                        borderRadius:"25px",

                    }}>
                        <table style={{
                            width:"100%",
                            padding:"5%",
                            fontSize:"1.2rem",
                        }}>
                            <tr><td>ID </td><td>Transação </td><td>Valor</td></tr>
                            {Transacrionsout.map((Transacrion) => <>
                            <tr><td>{Transacrion.id}</td><td>{Transacrion.title}</td><td>R$ {Transacrion.valor}</td></tr>
                            </>)}
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}