import React from "react";
import styled from "@emotion/styled";
import { DataHeaderCell } from "../types";

const HeaderCell = styled.th`
min-width: 48px;
padding: 4px 16px;
text-align: left;
`;

type DynamicHeaderCellProps = {
    dataHeaderCell: DataHeaderCell;
}

function DynamicHeaderCell({ dataHeaderCell }: DynamicHeaderCellProps){
    return(
        <HeaderCell>
            { dataHeaderCell.value }
        </HeaderCell>
    );
};

export default DynamicHeaderCell;
