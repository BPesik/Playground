import { Todo } from "../../types/data";

export const SET_TODOS = "SET_TODOS";
 
export type TodoState = Todo[];

type SetTodosAction = {
    type: typeof SET_TODOS
    payload: Todo[]
}
  
export type TodosActionTypes = SetTodosAction
