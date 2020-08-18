import React from "react";
import styled from "@emotion/styled";
import { DataHeader, DataHeaderCell } from "../types";
import DynamicHeaderCell from "../header-cell/index";

const TableHead = styled.thead`
    border-bottom: #dddddd 1px solid;
`;

function renderColumns(dataCells: DataHeaderCell[]) {
    let cells = [];

    for(let columnIndex = 0; columnIndex < dataCells.length; columnIndex++){
        cells.push(
            <DynamicHeaderCell key={`DynamicHeaderCell-${columnIndex}`} dataHeaderCell={dataCells[columnIndex]}/>
        )
    }

    return cells;
}

type DynamicHeaderProps = {
    dataHeader: DataHeader;
}

function DynamicHeader({ dataHeader }: DynamicHeaderProps){
    return(
        <TableHead>
            <tr key={`TableHeaderRow`}>
                {renderColumns(dataHeader.cells)}
            </tr>
        </TableHead>
    );
};

export default DynamicHeader;
