import {all} from "redux-saga/effects";
import restaurantsSaga from "./restaurants";

export default function* rootSaga(){
    yield all([...restaurantsSaga])
}