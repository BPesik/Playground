export const UPDATE_ONLINE = "UPDATE_ONLINE";
 
export type OnlineStatusState = {
    onlineStatus: boolean;
}

type UpdateOnlineStatusAction = {
    type: typeof UPDATE_ONLINE
    payload: boolean
}
  
export type UpdateOnlineStatusActionTypes = UpdateOnlineStatusAction
