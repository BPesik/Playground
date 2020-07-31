import React, { useState, useEffect } from "react"
import FetchData  from "../../api/dataApi"
import Table from "../../components/Table"
import { Todo } from "../../types/data"
import styled from "../../../node_modules/@emotion/styled"
import Paper from "@material-ui/core/Paper";
import MockedData from "../../MockData/todos";
import { useSelector } from "react-redux";
import { selectOnlineStatus } from "../../store/online-status/selectors";

const Body = styled.div`
    padding: 24px;
`;

function Todos() {
    const [data, setData] = useState<Todo[]>([]); 
    const onlineStatus = useSelector(selectOnlineStatus);

    useEffect(() => {
        if(onlineStatus){
            FetchData().then(x => setData(x));
        }
        else{
            setData(MockedData({numOfTodos: 10}));
        }
    }, [onlineStatus])

    return (
        <Body>
            <Paper>
                <Table rows={data}/>
            </Paper>
        </Body>
    )
}

export default Todos;