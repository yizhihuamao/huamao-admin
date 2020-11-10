import request from '@/utils/request';

export interface LoginParamsType {
    userName: string;
    password: string;
    mobile: string;
    captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
    const paramsTemp = {
        loginName: params.userName,
        password: params.password,
        organizeType: 10
    };
    return request('/xupd-cloud-user/api/user/v1/account/login', {
        method: 'POST',
        data: paramsTemp
    });
}

export async function getFakeCaptcha(mobile: string) {
    return request(`/api/login/captcha?mobile=${mobile}`);
}
