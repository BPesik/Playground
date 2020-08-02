import { onlineStatusReducer, initialOnlineStatusState } from "./online-status/reducers";
import { TodosReducer, initialTodosState } from "./todos/reducers";
import { combineReducers } from "redux";
import { Todo } from "../types/data";

export type State = {
    onlineStatus: boolean,
    todos: Todo[]
}

export const initialState: State = {
    onlineStatus: initialOnlineStatusState,
    todos: initialTodosState
};

export const rootReducer = combineReducers({
    onlineStatus: onlineStatusReducer, 
    todos: TodosReducer
}) ;
