import React from "react"
import { Todo, Importance } from "../../types/data"
import styled from "../../../node_modules/@emotion/styled"

type TableProps = {
    data: Todo[];
}

const StyledTable = styled.table`
    border: 1px grey solid;
    border-radius: 12px;
    padding: 8px;
    margin: 16px;
    background: #282c34;
    color: white;
`;

const HeaderCell = styled.th`
    padding: 8px;
    font-weight: bold;
    text-align: left
`;

const DataCell = styled.td`
    padding 8px;
`;


function Table({ data }: TableProps) {
    return (
        <StyledTable>
            <thead>
                <tr>
                    <HeaderCell>Task </HeaderCell>
                    <HeaderCell>Importance </HeaderCell>
                </tr>
            </thead>
            <tbody>
                {data.map(x => {
                    return (
                        <tr key={`row-${x.id}`}>
                            <DataCell>{x.task}</DataCell>    
                            <DataCell>{Importance[x.importance]}</DataCell>
                        </tr>
                )  
                })}
            </tbody>
        </StyledTable>
    )
}

export default Table;