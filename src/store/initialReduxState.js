



export default {
    base: {
        loading: false,
        login: {
            login_state: false,
            user_uid: null,
            access_token: null,
            user_profile_set: null,
            user_image_url: null,
            user_name: null
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
    profile: {
        photos_list: {
            state: false,
            data: []
        },
        profile_top_info: {
            state: false,
            data: []
        },
        timeline_list: {
            state: false,
            data: []
        },
    },
    home: {
        contents_list: {
            state: false,
            data: []
        },
    },
};