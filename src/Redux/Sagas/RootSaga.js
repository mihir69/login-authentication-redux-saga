import { all } from "@redux-saga/core/effects";
import loginSaga from "./LoginSaga";

export  function* RootSaga(){
  yield  all([
      loginSaga(),
  ])
}

