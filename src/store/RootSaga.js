import { defaultAxios, authAxios } from 'lib/globalAxios'
import { put, takeLatest, all } from 'redux-saga/effects';
import * as constants from 'lib/Constants';

import * as ActionTypes from './ActionTypes';

import * as API from 'lib/API';


function* fetchLoginData(loginData) {
    yield put({
        type: ActionTypes.SUCCEEDED_INIT_LOGIN_DATA,
        payload: loginData.payload
    });
}


function* fetchTryLogin(action) {
    yield put({ type: ActionTypes.SHOW_LOADING_ACTION});
    try {
        const tryResult = yield defaultAxios.post(constants.ServiceURL.user_login, action.payload);
        yield put({
            type: ActionTypes.SUCCEEDED_TRY_LOGIN,
            payload: tryResult
        });

    } catch(e) {
        // console.debug(e.data.message);
        yield put({
            type: ActionTypes.FAILED_TRY_LOGIN,
            message: e.data.message
        });
    }
    yield put({ type: ActionTypes.HIDE_LOADING_ACTION});
}

function* initializeTryLoginData() {
    // yield put({
    //     type: INITIALT_TRY_LOGIN
    // });
}

function* fetchTryUserBasicData(action) {
    // yield put({ type: ActionTypes.SHOW_LOADING_ACTION});
    try {
        const tryResult = yield authAxios.get(constants.ServiceURL.get_login_user_profile_basic_data, {
            params: {
                'user_uid': action.user_uid
            }
        });
        yield put({
            type: ActionTypes.SUCCEEDED_GET_USER_BASIC_DATA,
            payload: {
                state: true,
                data: tryResult.data
            }
        });

    } catch(e) {
        yield put({
            type: ActionTypes.FAILED_GET_USER_BASIC_DATA,
            message: e.data.message
        });
    }
    // yield put({ type: ActionTypes.HIDE_LOADING_ACTION});
}

function* fetchTryUserAccountBasicDataSave(action) {
    yield put({ type: ActionTypes.SHOW_LOADING_ACTION});
    try {
        const tryResult = yield authAxios.post(constants.ServiceURL.post_login_user_profile_basic_data, action.payload);

        yield put({
            type: ActionTypes.SUCCEEDED_USER_ACCOUNT_BASIC_DATA,
            payload: {
                state: true,
                data: tryResult.data
            }
        });
    } catch (error) {
        yield put({
            type: ActionTypes.FAILED_USER_ACCOUNT_BASIC_DATA,
            message: error.data.message
        });
    }
    yield put({ type: ActionTypes.HIDE_LOADING_ACTION});
}

function* fetchGetSiteBasicData() {
    // yield put({ type: ActionTypes.SHOW_LOADING_ACTION});
    try {
        const tryResult = yield API.getSiteBasicData();

        yield put({
            type: ActionTypes.SUCCEEDED_GET_SITE_BASIC_DATA,
            payload: {
                getState: true,
                data: tryResult.data
            }
        });
    } catch (error) {
        yield put({
            type: ActionTypes.FAILED_GET_SITE_BASIC_DATA,
            message: error.data.message
        });
    }
    // yield put({ type: ActionTypes.HIDE_LOADING_ACTION});
}

function* fetchGetProfileTimeline(action) {
    // yield put({ type: ActionTypes.SHOW_LOADING_ACTION});
    try {
        const getResult = yield API.getUserProfileTimeLineList(action.user_uid);
        if(getResult.status === true ) {
            yield put({
                type: ActionTypes.SUCCEEDED_GET_TIMELINE_LIST,
                payload: {
                    state: true,
                    data: getResult.data
                }
            });
        } else {
            yield put({
                type: ActionTypes.FAILED_GET_TIMELINE_LIST,
                payload: {
                    state: false,
                    data: [],
                    message: getResult.message
                }
            });
        }

    } catch (error) {
        yield put({
            type: ActionTypes.FAILED_GET_TIMELINE_LIST,
            payload: {
                state: false,
                data: [],
                message: error.data.message
            }
        });
    }
    // yield put({ type: ActionTypes.HIDE_LOADING_ACTION});
}


function* fetchGetProfilePhotosList(action) {
    try {
        const getResult = yield API.getUserProfilePhotosList(action.user_uid);
        if(getResult.status === true ) {
            yield put({
                type: ActionTypes.SUCCEEDED_GET_PHOTOS_LIST,
                payload: {
                    state: true,
                    data: getResult.data
                }
            });
        } else {
            yield put({
                type: ActionTypes.FAILED_GET_PHOTOS_LIST,
                payload: {
                    state: false,
                    data: [],
                    message: getResult.message
                }
            });
        }

    } catch (error) {
        yield put({
            type: ActionTypes.FAILED_GET_PHOTOS_LIST,
            payload: {
                state: false,
                data: [],
                message: error.data.message
            }
        });
    }
}

function* fetchGetProfileTopInfo(action) {
    // yield put({ type: ActionTypes.SHOW_LOADING_ACTION});
    try {
        const getResult = yield API.postUserProfileTopInfo(action.user_uid);
        if(getResult.status === true ) {
            yield put({
                type: ActionTypes.SUCCEEDED_GET_PROFILE_TOP_INFO,
                payload: {
                    state: true,
                    data: getResult.data
                }
            });
        } else {
            yield put({
                type: ActionTypes.FAILED_GET_PROFILE_TOP_INFO,
                payload: {
                    state: false,
                    data: [],
                    message: getResult.message
                }
            });
        }

    } catch (error) {
        yield put({
            type: ActionTypes.FAILED_GET_PROFILE_TOP_INFO,
            payload: {
                state: false,
                data: [],
                message: error.data.message
            }
        });
    }
    // yield put({ type: ActionTypes.HIDE_LOADING_ACTION});
}


function* fetchGetHomeContentsList() {
    // yield put({ type: ActionTypes.SHOW_LOADING_ACTION});
    try {
        const getResult = yield API.getHomeContentsList();
        if(getResult.status === true ) {
            yield put({
                type: ActionTypes.SUCCEEDED_GET_HOME_CONTENTS_LIST,
                payload: {
                    state: true,
                    data: getResult.data
                }
            });
        } else {
            yield put({
                type: ActionTypes.FAILED_GET_HOME_CONTENTS_LIST,
                payload: {
                    state: false,
                    data: [],
                    message: getResult.message
                }
            });
        }

    } catch (error) {
        yield put({
            type: ActionTypes.FAILED_GET_HOME_CONTENTS_LIST,
            payload: {
                state: false,
                data: [],
                message: error.data.message
            }
        });
    }
    // yield put({ type: ActionTypes.HIDE_LOADING_ACTION});
}


function* actionWatcher() {

    yield takeLatest(ActionTypes.INIT_LOGIN_DATA, fetchLoginData);

    yield takeLatest(ActionTypes.REQUEST_GET_SITE_BASIC_DATA, fetchGetSiteBasicData);
    yield takeLatest(ActionTypes.REQUEST_GET_HOME_CONTENTS_LIST, fetchGetHomeContentsList);

    yield takeLatest(ActionTypes.REQUEST_TRY_LOGIN, fetchTryLogin);
    yield takeLatest(ActionTypes.INITIALT_TRY_LOGIN, initializeTryLoginData);

    yield takeLatest(ActionTypes.REQUEST_GET_USER_BASIC_DATA, fetchTryUserBasicData);
    yield takeLatest(ActionTypes.REQUEST_USER_ACCOUNT_BASIC_DATA, fetchTryUserAccountBasicDataSave);

    yield takeLatest(ActionTypes.REQUEST_GET_TIMELINE_LIST, fetchGetProfileTimeline);

    yield takeLatest(ActionTypes.REQUEST_GET_PROFILE_TOP_INFO, fetchGetProfileTopInfo);
    yield takeLatest(ActionTypes.REQUEST_GET_PHOTOS_LIST, fetchGetProfilePhotosList);

}

export default function* RootSaga() {
    yield all([
        actionWatcher(),
    ]);
}