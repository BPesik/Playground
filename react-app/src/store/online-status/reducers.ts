import {
    UPDATE_ONLINE,
    OnlineStatusActionTypes,
    OnlineStatusState
} from './types'
  
export const initialOnlineStatusState: OnlineStatusState = false;
  
export function onlineStatusReducer(
    state = initialOnlineStatusState,
    action: OnlineStatusActionTypes
): OnlineStatusState {
    switch (action.type) {
        case UPDATE_ONLINE:
            return action.payload; 
        default:
            return state;
    }
}
