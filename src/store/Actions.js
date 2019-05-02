
import * as ActionTypes from './ActionTypes';


export const getUserBasicData = (user_uid) => ({
    type: ActionTypes.REQUEST_GET_USER_BASIC_DATA,
    user_uid: user_uid
});

export const putAccountBasicSave = (basicData) => ({
    type: ActionTypes.REQUEST_USER_ACCOUNT_BASIC_DATA,
    payload: basicData
});

export const initialtryLogin = () => ({
    type: ActionTypes.INITIALT_TRY_LOGIN
});

export const tryLogin = (loginData) => ({
    type: ActionTypes.REQUEST_TRY_LOGIN,
    payload: loginData
});

export const succeededTryLogin = () => ({
    type: ActionTypes.SUCCEEDED_TRY_LOGIN,
});

export const failedTryLogin = () => ({
    type: ActionTypes.FAILED_TRY_LOGIN,
});


export const putLoginData = (loginData) => ({
    type: ActionTypes.INIT_LOGIN_DATA,
    payload: loginData
});


export const putShowLoadingAction = () => ({
    type: ActionTypes.SHOW_LOADING_ACTION,
});


export const putHideLoadingAction = () => ({
    type: ActionTypes.HIDE_LOADING_ACTION,
});

export const putGetSiteBasicData = () => ({
    type: ActionTypes.REQUEST_GET_SITE_BASIC_DATA
});


export const putGetProfileTimeList = (user_uid) => ({
    type: ActionTypes.REQUEST_GET_TIMELINE_LIST,
    user_uid: user_uid
});