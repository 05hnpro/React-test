export const actions = {
    GET_RESTAURANTS_REQUEST: "restaurants/get_restaurants_request",
    GET_RESTAURANTS_SUCCESS: "restaurants/get_restaurants_success"
};

export const getRestaurantsRequest = () => ({
    type: actions.GET_RESTAURANTS_REQUEST
});

export const getRestaurantsSuccess = (restaurants) => ({
    type: actions.GET_RESTAURANTS_SUCCESS,
    payload: restaurants,
});
