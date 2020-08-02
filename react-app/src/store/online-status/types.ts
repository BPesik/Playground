export const UPDATE_ONLINE = "UPDATE_ONLINE";
 
export type OnlineStatusState = boolean;

type UpdateOnlineStatusAction = {
    type: typeof UPDATE_ONLINE
    payload: boolean
}
  
export type OnlineStatusActionTypes = UpdateOnlineStatusAction
