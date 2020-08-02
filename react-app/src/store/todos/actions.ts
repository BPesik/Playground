import { SET_TODOS, TodosActionTypes } from "./types";
import { Todo } from "../../types/data";

export function setTodos(newTodos: Todo[]): TodosActionTypes {
  return {
    type: SET_TODOS,
    payload: newTodos
  }
}
