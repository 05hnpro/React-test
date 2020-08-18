
import {actions} from "../actions/restaurants";

const INITIAL_STATE = {
    restaurants: []
}

export default function restaurants(state = INITIAL_STATE , action){
    switch(action.type){
        case actions.GET_RESTAURANTS_SUCCESS: {
            return {
                restaurants: action.payload.restaurants
            }
        }
        default:{
            return state;
        }
    }
}   