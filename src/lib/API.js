import { authAxios } from 'lib/globalAxios'

export function getSiteBasicData() {
    return authAxios.get('/api/v1/system/basic/data');
}

export function getUserProfileHomeData(user_uid) {
    return authAxios.get('/api/v1/account/profile/myhome', {
        params: {
            'user_uid': user_uid
        }
    })
}
export function getUserBasicData(user_uid) {
    return authAxios.get('/api/v1/account/profile/basic', {
        params: {
            'user_uid': user_uid
        }
    });
}

export function postUserBasicData(payload) {
    return authAxios.post('/api/v1/account/profile/basic', payload);
}

export function getUserPersonalData(user_uid) {
    return authAxios.get('/api/v1/account/profile/personal', {
        params: {
            'user_uid': user_uid
        }
    });
}

export function postUserPersonalData(payload) {
    return authAxios.post('/api/v1/account/profile/personal', payload);
}


export function postUserPasswordChange(payload) {
    return authAxios.post('/api/v1/account/profile/password', payload);
}

export function postUserProfilePhotoChange(payload) {
    return authAxios.post('/api/v1/upload/image/profile', payload);
}