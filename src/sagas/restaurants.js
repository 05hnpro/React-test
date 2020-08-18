import { takeEvery, call, fork, put } from "redux-saga/effects";
import * as actions from "../actions/restaurants";
import * as api from "../api/restaurants";

function* getRestaurants() {
    try {
        const result = yield call(api.getRestaurants);
        yield put(actions.getRestaurantsSuccess(result.data));
    }
    catch (error) {
        //yield put({ type: 'GET_RESTAURANTS_REQUEST_FAILED', error })
    }
}

function* watchGetRestaurantsRequests() {
    yield takeEvery(actions.actions.GET_RESTAURANTS_REQUEST, getRestaurants);
}

const restaurantsSaga = [
    fork(watchGetRestaurantsRequests)
]
export default restaurantsSaga;