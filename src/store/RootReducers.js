import { combineReducers } from 'redux'
import initialReduxState from './initialReduxState';
import * as Helper from 'lib/Helper';

import * as ActionTypes from './ActionTypes';

const BaseReducer = (state = initialReduxState.base, action) => {
    switch (action.type) {

        case ActionTypes.SHOW_LOADING_ACTION:
            return { ...state, loading: true};
        case ActionTypes.HIDE_LOADING_ACTION:
            return { ...state, loading: false};

        case ActionTypes.INIT_LOGIN_DATA:
            return { ...state };
        case ActionTypes.SUCCEEDED_INIT_LOGIN_DATA:
            return { ...state, login: action.payload };

        case ActionTypes.REQUEST_GET_SITE_BASIC_DATA:
            return { ...state};
        case ActionTypes.SUCCEEDED_GET_SITE_BASIC_DATA:
            return { ...state, site_base_data : action.payload};
        case ActionTypes.FAILED_GET_SITE_BASIC_DATA:
            return { ...state, site_base_data : action.payload};

        default:
            return state;
    }
};


const AuthReducer = (state = initialReduxState.auth, action) => {
    switch (action.type) {
        case ActionTypes.REQUEST_TRY_LOGIN:
            return { ...state, trylogin: true, loginstate: false };
        case ActionTypes.SUCCEEDED_TRY_LOGIN:
            return { ...state, payload: action.payload, trylogin: false, loginstate: true };
        case ActionTypes.FAILED_TRY_LOGIN:
            Helper.globalErroraAlert({
                title: '에러',
                text: action.message
            });
            return { ...state, payload: [], trylogin: false, loginstate: false };
        case ActionTypes.INITIALT_TRY_LOGIN:
            return { ...state, payload: [], trylogin: false, loginstate: false };
        default:
            return state;
    }

};


const AccountReducer = (state = initialReduxState.account, action) => {
    switch (action.type) {
        case ActionTypes.REQUEST_GET_USER_BASIC_DATA:
            return { ...state};
        case ActionTypes.SUCCEEDED_GET_USER_BASIC_DATA:
            return { ...state, user_basic_data: action.payload };
        case ActionTypes.FAILED_GET_USER_BASIC_DATA:
            return { ...state, user_basic_data: action.payload};

        default:
            return state;
    }
};

const ProfileReducer = (state = initialReduxState.profile, action) => {
    switch (action.type) {
        case ActionTypes.REQUEST_GET_TIMELINE_LIST:
            return { ...state};
        case ActionTypes.SUCCEEDED_GET_TIMELINE_LIST:
            return { ...state, timeline_list: action.payload };
        case ActionTypes.FAILED_GET_TIMELINE_LIST:
            return { ...state, timeline_list: action.payload};

        case ActionTypes.REQUEST_GET_PROFILE_TOP_INFO:
            return { ...state};
        case ActionTypes.SUCCEEDED_GET_PROFILE_TOP_INFO:
            return { ...state, profile_top_info: action.payload };
        case ActionTypes.FAILED_GET_PROFILE_TOP_INFO:
            return { ...state, profile_top_info: action.payload};





        default:
            return state;
    }
};


const RootReducer = combineReducers({
    profile: ProfileReducer,
    base: BaseReducer,
    auth: AuthReducer,
    account: AccountReducer,
})

export default RootReducer;
