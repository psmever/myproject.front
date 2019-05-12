
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


export const putGetProfileTopInfo = (user_uid) => ({
    type: ActionTypes.REQUEST_GET_PROFILE_TOP_INFO,
    user_uid: user_uid
});


/**
 *
 * @param {*} user_uid
 *
 * 프로필 포토 리스트
 */
export const putGetProfilePhotosList = (user_uid) => ({
    type: ActionTypes.REQUEST_GET_PHOTOS_LIST,
    user_uid: user_uid
});

/**
 *
 * 홈 전체 post 리스트
 */
export const putGetHomeContentsList = () => ({
    type: ActionTypes.REQUEST_GET_HOME_CONTENTS_LIST
});

export const putGetMoreHomeContentsList = () => ({
    type: ActionTypes.REQUEST_GET_MORE_HOME_CONTENTS_LIST
});

/**
 * 로그인 체크 액션
 */
export const putCheckLoginInfo = () => ({
    type: ActionTypes.CHECK_LOGIN_CHECK
});