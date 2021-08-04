import {
    FATCH_LOGIN_AUTH_REQUEST,
    FATCH_LOGIN_AUTH_SUCCESS,
    FATCH_LOGIN_AUTH_FAILURE,
} from '../constants/ActionConst';

export const fatchLoginAuthRequest = (email, password) => {
    return {
        type: FATCH_LOGIN_AUTH_REQUEST,
        payload: {
            username : email,
            password : password,
        },
    };
};
export const fatchLoginAuthSuccess = (response) => {
    return {
        type: FATCH_LOGIN_AUTH_SUCCESS,
        payload: response,
    };
};
export const fatchLoginAuthFailure = (error) => {
    return {
        type: FATCH_LOGIN_AUTH_FAILURE,
        payload: error,
    };
};
