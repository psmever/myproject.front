
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
