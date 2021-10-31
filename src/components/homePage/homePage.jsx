import React, { Component } from 'react';
import './homePage.css';

class homePage extends React.Component {
    render() {
        return <div className='homeContent'>
            <h2 className='title'>We Make Gunfighters</h2>
            <h1 className="fa fa-instagram"></h1>
            <p className='intro'>
                Here at Black Flag, we’re devout supporters of the second amendment. It’s our mission to share our military and law enforcement experience with the average American citizen, for the most reasonable price point in the tactical training market. It’s your right to be able to protect yourself when trouble comes knocking, and we’re here to give you the skillset to do that. Whether you’re a first time gun owner looking to to learn from scratch, or a certified airsoft larper, we’ve got a class for you.
            </p>
            <p className='intro'>
                Our lead firearm instructors are Infantry veterans from the Army and Marine Corps, respectively. The job of the American Infantryman is simple, to close with and destroy the enemies of the United States. Firearms are meant to be used in life threatening situations when someone is trying to cause serious bodily harm to you, your loved ones, or innocent bystanders around you. We’re pretty good at doing just that. Classes are scheduled at the users request, get in touch with us for training today.
            </p>
        </div>;
    }
}

export default homePage;