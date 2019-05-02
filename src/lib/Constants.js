const default_base_url = 'http://psmever.dlinkddns.com:4040';

export const globalConst = {
    default_user_image : default_base_url+'/resource/img/default_profile.png'
}



export const ServiceURL = {
    user_register_email_check: '/api/v1/auth/authorize/register_user_emailcheck',
    user_register_name_check: '/api/v1/auth/authorize/register_user_namecheck',
    user_register_password_check: '/api/v1/auth/authorize/register_user_passwordcheck',

    user_register: '/api/v1/auth/authorize/register',
    user_login: '/api/v1/auth/authorize/login',

    get_login_user_profile_basic_data: '/api/v1/account/profile/basic',
    post_login_user_profile_basic_data: '/api/v1/account/profile/basic',

    get_code_list: '/api/v1/system/code/list',

    test: '/api/v1/test',
    user_total_list: '/api/v1/user/total_list',
    totalcodelist: '/api/v1/system/code/list',
};

