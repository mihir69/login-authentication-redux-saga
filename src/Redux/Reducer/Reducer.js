import {
    FATCH_LOGIN_AUTH_REQUEST,
    FATCH_LOGIN_AUTH_SUCCESS,
    FATCH_LOGIN_AUTH_FAILURE,
} from '../constants/ActionConst';

const LoginAuthState = {
    Response: [],
    Error: '',
    Loading: true,
};

const reducer = (state = LoginAuthState, action) => {
    switch (action.type) {
        case FATCH_LOGIN_AUTH_REQUEST: {
            return {
                ...state,
                Loading: true,
            };
        }
        case FATCH_LOGIN_AUTH_SUCCESS: {
            return {
                ...state,
                Response: action.payload,
                Error: '',
            };
        }
        case FATCH_LOGIN_AUTH_FAILURE: {
            return {
                ...state,
                Error: action.payload,
                Response: [],
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;
