import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import { Importance } from "../../../types/data";
import { Todo } from "../../../types/data";

type RowProps = {
    onClick: (name: string) => void;
    isItemSelected: boolean;
    row: Todo;
    labelId: string;
}

function Row({ onClick, isItemSelected, row, labelId }: RowProps) {
    return (
        <TableRow
            hover
            onClick={() => onClick(row.id)}
            role="checkbox"
            aria-checked={isItemSelected}
            tabIndex={-1}
            selected={isItemSelected}
        >
            <TableCell padding="checkbox" key={`cell-Checkbox-${row.id}`}>
            <Checkbox
                    checked={isItemSelected}
                    inputProps={{ 'aria-labelledby': labelId }}
                    key={`checkbox-${row.id}`}
            />
            </TableCell>
            <TableCell component="th" id={labelId} scope="row" padding="none" key={`cell-Task-${row.id}`}>
            {row.task}
            </TableCell>
            <TableCell align="left" key={`cell-Importance-${row.id}`}>{ Importance[row.importance]}</TableCell>
        </TableRow>
    )
}

export default Row;