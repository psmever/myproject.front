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
        console.debug(e.data.message);
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
    yield put({ type: ActionTypes.SHOW_LOADING_ACTION});
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
    yield put({ type: ActionTypes.HIDE_LOADING_ACTION});
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
    yield put({ type: ActionTypes.SHOW_LOADING_ACTION});
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
    yield put({ type: ActionTypes.HIDE_LOADING_ACTION});
}

function* actionWatcher() {

    yield takeLatest(ActionTypes.INIT_LOGIN_DATA, fetchLoginData);

    yield takeLatest(ActionTypes.REQUEST_GET_SITE_BASIC_DATA, fetchGetSiteBasicData);

    yield takeLatest(ActionTypes.REQUEST_TRY_LOGIN, fetchTryLogin);
    yield takeLatest(ActionTypes.INITIALT_TRY_LOGIN, initializeTryLoginData);

    yield takeLatest(ActionTypes.REQUEST_GET_USER_BASIC_DATA, fetchTryUserBasicData);
    yield takeLatest(ActionTypes.REQUEST_USER_ACCOUNT_BASIC_DATA, fetchTryUserAccountBasicDataSave);

}

export default function* RootSaga() {
    yield all([
        actionWatcher(),
    ]);
}