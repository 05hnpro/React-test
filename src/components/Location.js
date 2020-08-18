import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Header } from '../components/Header';
import '../App.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'

const Location = (props) => {
    const { location } = props;
    return (
        <div>
            <Header />
            <div className="map-container">
                <Map
                    google={props.google}
                    zoom={16}
                    initialCenter={{ lat: location.state.location.lat, lng: location.state.location.lng }}
                >
                    <Marker position={{ lat: location.state.location.lat, lng: location.state.location.lng }} />
                </Map>
            </div>
            <Card className="restaurant-info">
                <Card.Title className="mb-0">{location.state.name}</Card.Title>
                <Card.Text>{location.state.category}</Card.Text>
            </Card>
            <ListGroup variant="flush" className="list-group">
                <ListGroup.Item>{location.state.location.formattedAddress.join(',')}</ListGroup.Item>
                <ListGroup.Item>{(location.state.contact) ? location.state.contact.formattedPhone: "N/A"}</ListGroup.Item>
                <ListGroup.Item>{(location.state.contact) ? (location.state.contact.twitter) ? '@'+location.state.contact.twitter : "" : "N/A"}</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDFTfCu2rXDn78zX7Tc2IEpBuxBYr__WVA'
})(Location);