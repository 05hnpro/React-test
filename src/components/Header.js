import React from 'react';
import mapsIcon from '../assets/maps-icon.png';

export const Header = () => {
    return (
        <div className="header">
            <h1> <a href="/">Lunch Tyme</a></h1>
            <div>
                <img
                    src={mapsIcon}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Maps"
                />
            </div>
        </div>
    )
}