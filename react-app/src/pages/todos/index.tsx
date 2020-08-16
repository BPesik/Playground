import React, { useEffect } from "react"
import FetchData  from "../../api/dataApi"
import Table from "../../components/Table"
import styled from "../../../node_modules/@emotion/styled"
import Paper from "@material-ui/core/Paper";
import MockedData from "../../MockData/todos";
import { useSelector, useDispatch } from "react-redux";
import { selectOnlineStatus } from "../../store/online-status/selectors";
import { selectTodos } from "../../store/todos/selectors";
import { setTodos } from "../../store/todos/actions";

const Body = styled.div`
    padding: 24px;
    margin-bottom: 24px;
`;

function Todos() {
    const dispatch = useDispatch();
    const onlineStatus = useSelector(selectOnlineStatus);
    const todos = useSelector(selectTodos);

    useEffect(() => {
        if(onlineStatus){
            dispatch(FetchData());
        }
        else{
            dispatch(setTodos(MockedData({numOfTodos: 20})));
        }
    }, [onlineStatus, dispatch])

    return (
        <Body>
            <Paper>
                <Table title="What to do..." 
                    rows={todos}/>
            </Paper>
        </Body>
    )
}

export default Todos;