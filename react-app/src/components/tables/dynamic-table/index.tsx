import React from "react";
import { DataRow, DataHeader } from "./types";
import styled from "@emotion/styled";
import DynamicRow from "./row/index";
import DynamicHeader from "./header/index";

const Table = styled.table`
    border-collapse: collapse;
    font-family: Arial;
`;

function renderRows(dataRows: DataRow[]){
    let rows = [];
    
    for(let i = 0; i < dataRows.length; i++){
        rows.push(
            <DynamicRow dataRow={dataRows[i]}/>
        )
    }
    
    return rows;
}

type TableProps = {
    dataHeader: DataHeader;
    dataRows: DataRow[];
}

function DynamicTable({dataHeader, dataRows}: TableProps){
    return(
        <Table>
            <DynamicHeader dataHeader={dataHeader}/>
            <tbody>
                {renderRows(dataRows)}
            </tbody>
        </Table>
    )
}

export default DynamicTable;
