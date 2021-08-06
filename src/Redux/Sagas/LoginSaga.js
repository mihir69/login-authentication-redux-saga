import { call, put, takeEvery } from 'redux-saga/effects';

import { FATCH_LOGIN_AUTH_REQUEST } from '../constants/ActionConst';
import { fatchLoginAuthFailure, fatchLoginAuthSuccess, } from '../Actions/Actions';
import { getLoginAuth } from '../Api/ApiCalls';

function* fatchLoginSaga(action) {
    try {
        const userAuth = yield call(getLoginAuth, action.payload);
        if (userAuth.statusCode === 200) {
            console.log(userAuth.accessToken);
            localStorage.setItem('myaccessToken', userAuth.accessToken);
            yield put(fatchLoginAuthSuccess(userAuth.user));
        }
         else if (userAuth.statusCode === 401)
            yield put(fatchLoginAuthFailure(userAuth.message));
         else throw Error('network Error');
    } catch {
        alert(`network Error!!! check your , API or internet connection`);
    }
}

function* loginSaga() {
    yield takeEvery(FATCH_LOGIN_AUTH_REQUEST, fatchLoginSaga);
}
export default loginSaga;
