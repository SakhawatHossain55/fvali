import { IAuthData } from "types";
import { ActionType } from "../actionType";

interface loginSuccessAction {
  type: ActionType.LOGIN_SUCCESS;
  payload: IAuthData;
}

interface loginPendingAction {
  type: ActionType.LOGIN_PENDING;
}

interface loginError {
  type: ActionType.LOGIN_ERROR;
  payload: string;
}

interface loginAction {
  type: ActionType.LOGOUT;
}

export type AuthAction =
  | loginSuccessAction
  | loginPendingAction
  | loginAction
  | loginError;
