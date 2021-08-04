import { call, put, takeEvery } from 'redux-saga/effects';

import { FATCH_LOGIN_AUTH_REQUEST } from '../constants/ActionConst';
import {
    fatchLoginAuthFailure,
    fatchLoginAuthSuccess,
} from '../Actions/Actions';
import { getLoginAuth } from '../Api/ApiCalls';

function* fatchLoginSaga(action) {
    try {
        const userAuth = yield call(getLoginAuth, action.payload);
        yield put(fatchLoginAuthSuccess(userAuth));
    } catch {
        yield put(fatchLoginAuthFailure('user not register , go to register'));
    }
}

function* loginSaga() {
    yield takeEvery(FATCH_LOGIN_AUTH_REQUEST, fatchLoginSaga);
}
export default loginSaga;
