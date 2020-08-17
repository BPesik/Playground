import React from "react";
import styled from "@emotion/styled"
import { DataCell, DataRow } from "../types";
import DynamicCell from "../cell/index";

const Row = styled.tr`
    border-bottom: #dddddd 1px solid;
    height: 40px;
`;

function renderCells(dataCells: DataCell[]){
    let cells = [];

    for(let i = 0; i < dataCells.length; i++){
        cells.push(
            <DynamicCell dataCell={dataCells[i]}/>
        )
    }

    return cells;
}

type DynamicRowProps = {
    dataRow: DataRow;
};

function DynamicRow({ dataRow }: DynamicRowProps){
    return(
        <Row key={`tableRow-`}>
            {renderCells(dataRow.cells)}
        </Row>
    );
};

export default DynamicRow;
