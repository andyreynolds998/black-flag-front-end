import React, { Component } from 'react';
import './headerPhoto.css';

class HeaderPhoto extends React.Component {
    render() {
        return <img className="headerPhoto" src={process.env.PUBLIC_URL + '/IMG_1.jpg'} />;
    }
}

export default HeaderPhoto;