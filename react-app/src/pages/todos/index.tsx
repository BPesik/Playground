import React, { useState, useEffect } from "react"
import FetchData  from "../../api/dataApi"
import Table from "../../components/Table"
import { Todo } from "../../types/data"
import styled from "../../../node_modules/@emotion/styled"
import Paper from '@material-ui/core/Paper';

const TodosBody = styled.div`
    padding: 24px;
`;

const StyledPaper = styled(Paper)`
    width: 100%;
    margin-bottom: 
`;


// paper: {
//     width: '100%',
//     marginBottom: theme.spacing(2),
//   },

function Todos() {
    const [data, setData] = useState<Todo[]>([]); 

    useEffect(() => {
        FetchData().then(x => setData(x));
    }, [])

    return (
        <TodosBody>
            <Paper>
                <Table rows={data}/>
            </Paper>
        </TodosBody>
    )
}

export default Todos;