import React from "react";
import { TotalCash, useCash } from "../../hooks/cash";
import { useEntradas } from "../../hooks/entradas";
import { useSaidas } from "../../hooks/saidasall";
import BoxesStyled from "./styled";
export function DataBoxes(){
    const {Cash, setCash} = useCash();
    const {Entradas, setEntradas} = useEntradas();
    const {Saidas, setSaidas} = useSaidas();
    return(
        <>
        <div>
            <BoxesStyled>
                <div className={"boxes"}>
                    <div>
                        <div>
                            <h1>Seu Saldo é :</h1>
                            <div style={{
                               textAlign:"center",
                               display:"flex",
                               justifyContent:"center",
                               alignItems:"center",
                             }}>
                                <h3>
                                   R$ {TotalCash()}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Relatorio Geral </h1>
                            <div style={{
                               textAlign:"center",
                               display:"flex",
                               justifyContent:"center",
                               alignItems:"center",
                             }}>
                                <h3>
                                   Entradas :R$ {Entradas} <br/> Saidas R${Saidas}
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1>Seu Saldo é :</h1>
                            <div style={{
                               textAlign:"center",
                               display:"flex",
                               justifyContent:"center",
                               alignItems:"center",
                             }}>
                                <h3>
                                   R$ {Cash}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </BoxesStyled>
        </div>
        </>
    )
}