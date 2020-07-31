import {
    UPDATE_ONLINE,
    UpdateOnlineStatusActionTypes,
    OnlineStatusState
} from './types'
  
export const initialOnlineStatusState: OnlineStatusState = {
    onlineStatus: false
}
  
export function onlineStatusReducer(
    state = initialOnlineStatusState,
    action: UpdateOnlineStatusActionTypes
): OnlineStatusState {
    switch (action.type) {
        case UPDATE_ONLINE:
            return {
                ...state,
                ...{ onlineStatus: action.payload }
            }
        default:
            return state
    }
}
