import { AuthAction } from "redux/actions/authAction";
import { ActionType } from "redux/actionType";
import { IAuthData } from "../../types";

interface IAuthStatus {
  data: IAuthData | null;
  status: "idle" | "pending" | "success" | "error";
  error: null | string;
}

const initialState: IAuthStatus = {
  data: null,
  status: "idle",
  error: null,
};

const authReducer = (
  state: IAuthStatus = initialState,
  action: AuthAction
): IAuthStatus => {
  switch (action.type) {
    case ActionType.LOGIN_PENDING:
      return {
        data: null,
        status: "pending",
        error: null,
      };
    case ActionType.LOGIN_SUCCESS:
      return {
        data: action.payload,
        status: "success",
        error: null,
      };
    case ActionType.LOGIN_ERROR:
      return {
        data: null,
        status: "error",
        error: action.payload,
      };
    case ActionType.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
