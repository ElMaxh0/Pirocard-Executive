import React from "react";
import { usePersonalInfo } from "../../hooks/personaldata";

export function Account(){
    const {PersonalInfo, setPersonalInfo} = usePersonalInfo();
    function getIdade(){
        function dataAtualFormatada(){
                var data = new Date()
                var dia  = data.getDate().toString()
                var diaF = (dia.length == 1) ? '0'+dia : dia
                var mes  = (data.getMonth()+1).toString()
                var mesF = (mes.length == 1) ? '0'+mes : mes
                var anoF = data.getFullYear();
                return mesF+"/"+diaF+"/"+anoF;
            
        }
        const date2 = PersonalInfo.datanasc
        const diffTime = Math.abs(date2 - dataAtualFormatada());
        const diffMeses = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30 ));
        console.log(diffMeses)
        return (diffMeses)


    }
    return(
        <>
        <div>
            <div>
                <div style={{
                    padding:"1%",
                    backgroundColor:"rgba(10,10,10,1)",
                    color:"rgba(255,245,244,1)",
                    borderRadius:"25px",
                    textAlign:"left",
                    width:"95%",
                    margin:"1%",

                }}>
                    <h1 style={{
                       padding:"1%",
                       marginLeft:"5%", 
                    }}> Meu Pirocard </h1>
                    <div style={{
                        backgroundColor:"rgba(50,44,50,1)",
                        borderRadius:"25px",
                        height:"60vh",
                        overflow:"scroll",
                        textAlign:"center",
                        padding:"3%",

                    }}>
                        <div>
                            <div className="imgusercontainer" style={{
                                display:"flex",
                                marginLeft:"auto",
                                marginRight:"auto",
                                alignContent:"center",
                                justifyContent:"center",
                                width:"100%",
                            }}>
                                <img className={"userimage"} src={"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/4-Writer-256.png"} />
                            </div>
                            <div className={"userinfo"}>
                                <div>
                                    <h1>{PersonalInfo.nome} {PersonalInfo.sobrenome}</h1>
                                    <h1>({PersonalInfo.apelido})</h1>
                                    <h4>{getIdade()}</h4>
                                </div>
                                <div style={{
                                        textAlign:"left"
                                    }}>
                                        <h2>Dados de Contato </h2>
                                        <hr />
                                        <p>{PersonalInfo.cell}</p>
                                        <p>{PersonalInfo.email}</p>
                                    </div>
                            
                                <div style={{
                                        textAlign:"left"
                                    }}>
                                        <h2>Dados Pessoais </h2>
                                        <hr />
                                        <p>{PersonalInfo.andress}</p>
                                        <p>{PersonalInfo.link}</p>
                                    </div>
                                <div style={{
                                    float:"left",
                                }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}