



export default {
    base: {
        loading: false,
        login: {
            login_state: false,
            user_uid: '',
            access_token: null,
            user_profile_state: ''
        },
        site_base_data: {
            getState: false,
            data: []
        },
    },
    auth: {
        trylogin: false,
        loginstate: false,
        payload: []
    },
    account: {
        user_basic_data: {
            state: false,
            data: []
        },
        user_basic_data_save_state: false
    },
};