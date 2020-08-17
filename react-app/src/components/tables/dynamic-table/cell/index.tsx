import React from "react";
import styled from "@emotion/styled"
import { DataCell } from "../types";

const Cell = styled.td`
    padding: 16px;
`;

type DynamicCellProps = {
    dataCell: DataCell;
};

function DynamicCell({dataCell}: DynamicCellProps){
    return(
        <Cell>
            {dataCell.value}
        </Cell>
    );
};

export default DynamicCell;
