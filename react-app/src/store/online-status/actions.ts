import { UPDATE_ONLINE, UpdateOnlineStatusActionTypes, OnlineStatusState } from './types'

export function updateOnlineStatus(newStatus: boolean): UpdateOnlineStatusActionTypes {
  return {
    type: UPDATE_ONLINE,
    payload: newStatus
  }
}
