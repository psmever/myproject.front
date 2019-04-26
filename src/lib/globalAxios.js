import axios from 'axios';
import * as Helper from 'lib/Helper';

const CancelToken = axios.CancelToken;

const defaultAPIURL = (() => {
  if (process.env.NODE_ENV === 'development') {
      return 'http://psmever.dlinkddns.com:4040/service';
  }

  if (process.env.APP_ENV === 'server' && process.env.LOCAL === 'true') {
    return 'http://psmever.dlinkddns.com:4040/service';
  }

  return 'http://psmever.dlinkddns.com:4040/service';

})();

const refreshToken = async () => {
    const { access_token } = Helper.storageManager.get('logininfo');
    const e = {
        access_token: access_token
    };

    return new Promise((resolve, reject) => {
        return defaultAxios.post('/api/v1/auth/token/access_token', e).then((response) => {
          resolve(response)
        }).catch((error) => {
          reject(error)
        })
    })
}

export const defaultAxios = axios.create({
    baseURL: defaultAPIURL,
    // timeout: 20000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Client-Type': 'C01010'
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
    // timeout: 20000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8;multipart/form-data',
        'Client-Type': 'C01010'
    }
});

authAxios.interceptors.request.use( config => {
    return refreshToken().then((response) => {
        const { state, access_token } = response.data;
        if( state === true && access_token)
        {
            const logininfo = Helper.storageManager.get('logininfo');
            const loginInfoData = {
                login_state: true,
                access_token: access_token,
                user_profile_set: logininfo.user_profile_set
            }
            Helper.storageManager.set('logininfo', loginInfoData);
            config.headers.Authorization = access_token;
        } else {
            config.headers.Authorization = access_token;
        }
        // console.debug('access_token: ',access_token);

        return Promise.resolve(config)
    }).catch((error) => {
        Helper.globalErroraAlert({
            title: '에러',
            text: '알수 없는 문제 입니다. 다시 로그인해 주세요.'
        })

        console.debug(['access_token_error', error]);

        localStorage.clear();
        window.location.reload();
        // history.push('/auth/login');

        return Promise.reject({
            cancelToken: new CancelToken((cancel) => cancel('Cancel repeated request'))
        })
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
    console.debug([':authAxios error:', error]);
    const { name, result, message } = error.response.data;
    return {
        status: false,
        message: message,
        data: {
            name: name,
            result: result,
        }
    };

    // return {
    //     status: status,
    //     statusText: statusText,
    //     data: {
    //         name: name,
    //         result: result,
    //         message: message
    //     }
    // };
});

