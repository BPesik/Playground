import {
    SET_TODOS,
    TodosActionTypes,
    TodoState
} from './types'
import { Todo } from '../../types/data';
  
export const initialTodosState: TodoState = [];
  
export function TodosReducer(
    state = initialTodosState,
    action: TodosActionTypes
): Todo[] {
    switch (action.type) {
        case SET_TODOS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}
