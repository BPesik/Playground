import React, { useState, useEffect } from "react"
import FetchData  from "../../api/dataApi"
import Table from "../../components/Table"
import { Todo } from "../../types/data"
import styled from "../../../node_modules/@emotion/styled"
import Paper from "@material-ui/core/Paper";
import MockedData from "../../MockData/todos";

const Body = styled.div`
    padding: 24px;
`;

function Todos() {
    const [data, setData] = useState<Todo[]>([]); 

    // will be stored and retrieved from Redux store. 
    const online = false;

    useEffect(() => {
        if(online){
            FetchData().then(x => setData(x));    
        }
        else{
            setData(MockedData({numOfTodos: 10}));
        }
    }, [online])

    return (
        <Body>
            <Paper>
                <Table rows={data}/>
            </Paper>
        </Body>
    )
}

export default Todos;