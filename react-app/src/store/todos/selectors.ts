import { State } from "../../store/index";
 
export const selectTodos = (state: State) => Object.values(state.todos);
