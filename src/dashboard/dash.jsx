import React from "react";
import { DataBoxes } from "../components/boxes/databox";
import { Extract } from "../components/history/history";
import { DashboardContainer } from "./styled";

export function Dashboard (){
    return(
        <>
        <DashboardContainer>
            <div>
                <div>
                    <DataBoxes/>
                    <Extract />
                </div>
            </div>
        </DashboardContainer>
        </>
    )
}