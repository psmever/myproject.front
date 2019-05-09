import axios from 'axios';
import * as Helper from 'lib/Helper';
import _ from 'lodash';

// const CancelToken = axios.CancelToken;

const defaultAPIURL = (() => {
    return process.env.REACT_APP_API_URL
})();

const refreshToken = async () => {
        return new Promise((resolve, reject) => {
            const loginInfo = Helper.storageManager.get('logininfo');
            if(loginInfo === null) {
                reject({tokenNone: true});
            }
            return defaultAxios.post('/api/v1/auth/token/access_token', {
                access_token: loginInfo.access_token
            }).then((response) => {
                resolve(response)
            }).catch((error) => {
                reject(error)
            })
        })
}

export const defaultAxios = axios.create({
    baseURL: defaultAPIURL,
    timeout: process.env.REACT_APP_API_TIMEOUT,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Client-Type': process.env.REACT_APP_CLIENT_TYPE
    }
});

// Add a response interceptor
defaultAxios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    const { status, statusText, data } = error.response;
    const { name, result, message } = data;

    return Promise.reject({
        status: status,
        statusText: statusText,
        data: {
            name: name,
            result: result,
            message: message
        }
    });
});

export const authAxios = axios.create({
    baseURL: defaultAPIURL,
    timeout: process.env.REACT_APP_API_TIMEOUT,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;multipart/form-data',
        'Client-Type': process.env.REACT_APP_CLIENT_TYPE
    }
});

authAxios.interceptors.request.use( config => {
    return refreshToken().then((response) => {
        const { state, access_token } = response.data;
        if( state === true && access_token) {
            const logininfo = Helper.storageManager.get('logininfo');
            const loginInfoData = {
                login_state: true,
                user_uid: logininfo.user_uid,
                user_name: logininfo.user_name,
                access_token: access_token,
                user_profile_set: logininfo.user_profile_state,
                user_image_url: logininfo.user_image_url,
            }
            Helper.storageManager.set('logininfo', loginInfoData);
            config.headers.Authorization = access_token;
        } else {
            config.headers.Authorization = access_token;
        }
        // console.debug('access_token: ',access_token);

        return Promise.resolve(config)
    }).catch((error) => {
        return Promise.reject(error)
    })
},
    error => Promise.reject(error),
);

// Add a response interceptor
authAxios.interceptors.response.use(function (response) {
    // Helper.DEBUG(':axios end:');
    // console.debug(response.data);
    return response.data;
}, function (error) {
    if(_.get(error, 'tokenNone')) {
        return {
            status: false,
            message: '로그인이 필요한 서비스 입니다.',
        };

    } else {
        const { name, result, message } = error.response.data;
        return {
            status: false,
            message: message,
            data: {
                name: name,
                result: result,
            }
        };
    }
});

