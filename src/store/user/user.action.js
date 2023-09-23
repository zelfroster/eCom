import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export function setCurrentUser(user) {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
}

export function checkUserSession() {
  return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
}

export function googleSignInStart() {
  return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
}

export function emailSignInStart(email, password) {
  return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
    email,
    password,
  });
}

export function signInSuccess(user) {
  return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
}

export function signInFailed(error) {
  return createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);
}

export function signUpStart(email, password, displayName) {
  return createAction(USER_ACTION_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });
}

export function signUpSuccess(user, additionalDetails) {
  return createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
    user,
    additionalDetails,
  });
}

export function signUpFailed(error) {
  return createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);
}

export function signOutStart() {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_START);
}

export function signOutSuccess() {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
}

export function signOutFailed(error) {
  return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
}
