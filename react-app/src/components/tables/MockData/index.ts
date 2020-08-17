import { DataRow, DataCell } from "../../../types/data";

export function mockDataColumns(numOfColumns: number) {
    let dataColumns: string[] = [];

    for(let columnIndex = 0; columnIndex < numOfColumns; columnIndex++){
        dataColumns.push(`${columnIndex}`)
    }

    console.log(dataColumns)

    return dataColumns;
}

export function mockDataRows(numOfRows: number, numOfColumns: number): DataRow[] {
    let dataRows: DataRow[] = [];

    function mockDataCells(rowIndex: number){
        let dataCells: DataCell[] = [];
        
        for(let columnIndex = 0; columnIndex < numOfColumns; columnIndex++){
            const dataCell: DataCell = {
                value: `${rowIndex}:${columnIndex}`
            }

            dataCells.push(dataCell);
        }

        return dataCells;
    }

    for(let rowIndex = 0; rowIndex < numOfRows; rowIndex++){
        const dataRow: DataRow = {
            cells: mockDataCells(rowIndex)
        }

        dataRows.push(dataRow);
    }

    return dataRows;
}