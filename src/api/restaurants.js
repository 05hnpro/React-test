import axios from "axios";

export const getRestaurants = () => {
    return axios.get('https://s3.amazonaws.com/br-codingexams/restaurants.json');
}