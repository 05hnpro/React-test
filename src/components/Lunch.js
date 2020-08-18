import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantsRequest } from "../actions/restaurants";
import { Header } from '../components/Header';
import Card from 'react-bootstrap/Card';


export const Lunch = (props) => {
    //Saga API call
    const dispatch = useDispatch();
    const { restaurants } = useSelector(
        state => ({
            restaurants: state.restaurants,
        })
    );
    useEffect(() => {
        dispatch(getRestaurantsRequest());
    }, [dispatch])

    const routeChange = useCallback((restaurant) => {
        props.history.push("/map", {...restaurant});
    })
    return (
        <div>
            <Header />
            <div className="restaurants-container">
                {restaurants.restaurants.length > 0 && restaurants.restaurants.map((restaurant, index) => (
                    <Card key={index} className="text-white restaurant"  onClick={() => routeChange(restaurant)}>
                        <Card.Img src={restaurant.backgroundImageURL} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>{restaurant.name}</Card.Title>
                            <Card.Text>{restaurant.category}</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                ))}
            </div>
        </div>
    )
}