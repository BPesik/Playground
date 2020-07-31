import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Todo } from "../../../types/data";
import { Order } from "../Types/index";
import styled from "../../../../node_modules/@emotion/styled";

type HeadCell = {
    disablePadding: boolean;
    id: keyof Todo;
    label: string;
    numeric: boolean;
}

type HeaderProps = {
    amountSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Todo) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}
  
const headCells: HeadCell[] = [
    { id: "id", numeric: false, disablePadding: true, label: "Task" },
    { id: "id", numeric: false, disablePadding: false, label: "Importance" }
];

const StyledSpan = styled.span`
    border: 0;
    clip: 'rect(0 0 0 0)';
    height: 1;
    margin: -1;
    overflow: 'hidden';
    padding: 0;
    position: 'absolute';
    top: 20;
    width: 1;
`;

function Header({
  rowCount,
  orderBy,
  order,
  onSelectAllClick,
  onRequestSort,
  amountSelected
}: HeaderProps) {
    const createSortHandler = (property: keyof Todo) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={amountSelected > 0 && amountSelected < rowCount}
              checked={rowCount > 0 && amountSelected === rowCount}
              onChange={onSelectAllClick}
              inputProps={{ 'aria-label': 'select all desserts' }}
            />
          </TableCell>
          {headCells.map((headCell) => (
            <TableCell
              key={`HeadCell-${headCell.label}`}
              align={headCell.numeric ? 'right' : 'left'}
              padding={headCell.disablePadding ? 'none' : 'default'}
              sortDirection={orderBy === headCell.id ? order : false}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <StyledSpan>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </StyledSpan>
                ) : null}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

export default Header;