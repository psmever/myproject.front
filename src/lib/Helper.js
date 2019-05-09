import * as Constants from 'lib/Constants';

export const globalAlert = (d) => {
    const swal = require('sweetalert');
    swal(d.text);
};

export const globalSuccessAlert1 = (d) => {
    const swal = require('sweetalert');
    swal({
        title: "성공",
        text: d.text,
        icon: "success",
        button: "확인",
    });
};

export const globalSuccessAlert2 = (d) => {
    const swal = require('sweetalert');
    swal({
        title: d.title,
        text: d.text,
        icon: "success",
        button: "확인",
    });
};

export const globalaWarningAlert = (d) => {
    const swal = require('sweetalert');
    swal({
        title: "경고",
        text: d.text,
        icon: "warning",
        button: "확인",
    });
};

export const globalErroraAlert = (d) => {
    const swal = require('sweetalert');
    swal({
        title: "에러",
        text: d.text,
        icon: "error",
        button: "확인",
    });
};

export const globalinfoAlert = (d) => {
    const swal = require('sweetalert');
    swal({
        title: "정보",
        text: d.text,
        icon: "info",
        button: "확인",
    });
};


export const isEmpty = function(value) {
    if( value === "" || value === null || value === undefined || ( value !== null && typeof value === "object" && !Object.keys(value).length ) ) {
        return true
    }else{
        return false
    }
}



/*
기본 debug log
*/

export const DEBUG = (e) => {
    console.debug('%c::DEBUG::', 'color: green; font-weight: bold;',e);
};

export const DEBUG2 = (e) => {
    // console.log('SENT URL: %c %s >>>>>> %c | HTTP Method: %c"%s" %c| PARAMS: %O', "color: green; font-size: 12px", e, "color: black;", "color: #BA49FF; font-weight: bold; font-size: 12px", e, "color: black;", e);
    // console.log(`bear: ${e}`)
    // console.table(`%c${e}`, `color:Blue`)
    console.table(e);
};

export const storageManager = {
    set: (key, object) => {
        if(!localStorage) return;
        localStorage[key] = (typeof object) === 'string' ? object : JSON.stringify(object);
    },
    get: (key) => {
        if(!localStorage) return null;

        if(!localStorage[key]) {
            return null;
        }

        try {
            const parsed = JSON.parse(localStorage[key]);
            return parsed;
        } catch(e) {
            return localStorage[key];
        }
    },
    remove: (key) => {
        if(!localStorage) return null;

        if(localStorage[key]) {
            localStorage.removeItem(key);
        }
    }
};


// 0으로 채울때...
export const numberPad = (n, width) => {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

// http:// 붙이기
export function httpHtml(content) {
    const reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;

    return content.replace(reg, "<a href='$1$2'>$1$2</a>");
}

/**
 * 사용자 이미지 갖고 오기
 */
export const getUserImageURL = () => {
    const loginInfo = storageManager.get('logininfo') || { login_state: false};
    if(isEmpty(loginInfo.login_state) === false && loginInfo.login_state === true) {
        return loginInfo.user_image_url
    } else {
        return Constants.globalConst.default_user_image
    }
}

export const getLoginUserInfo = () => {
    const loginInfo = storageManager.get('logininfo') || { login_state: false};
    if(isEmpty(loginInfo.login_state) === false && loginInfo.login_state === true) {
        return {
            name: ''
        }
    } else {
        return Constants.globalConst.default_user_image
    }
}