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


export function postUserProfileTimeLineTodaySave(payload) {
    return authAxios.post('/api/v1/post/timeline/today', payload);
}


export function postUserProfileTimeLineTodayPhotoSave(payload) {
    return authAxios.post('/api/v1/upload/image/todayimage', payload);
}


export function getUserProfileTimeLineList(user_uid) {
    return authAxios.get('/api/v1/post/timeline/today', {
        params: {
            'user_uid': user_uid
        }
    });
}


/**
 *
 * @param {*} payload
 *
 * 코멘트 저장
 */
export function postUserProfileTimeLineTodayCommentSave(payload) {
    return authAxios.post('/api/v1/post/timeline/comment', payload);
}

/**
 *
 * @param {*} payload
 * 타임 라인 라이크 버튼
 */
export function postUserProfileTimeLineLikeButtonClick(payload) {
    return authAxios.post('/api/v1/post/timeline/like', payload);
}