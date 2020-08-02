import { UPDATE_ONLINE, OnlineStatusActionTypes } from './types'

export function updateOnlineStatus(newStatus: boolean): OnlineStatusActionTypes {
  return {
    type: UPDATE_ONLINE,
    payload: newStatus
  }
}
