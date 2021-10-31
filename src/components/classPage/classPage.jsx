import React, { Component } from 'react';
import './classPage.css';

//components
import Class from './../class/class';
import ClassService from './../../Services/classService';

class ClassPage extends React.Component {
    state = {
        allClasses: []
    }



    render() {
        return (
            <div className="classWebPage">
                <p className="classPageP">
                    At this time, we're not yet open to the general public. We do send out invitations on a first come, first serve basis to help field test our curriculum. If you would be interested in attending a FREE class, please contact us through any of our official channels and we will get back to you as soon as possible.
                </p>

                {this.state.allClasses.map(cObject => <Class data={cObject} ></Class>)}
            </div>);
    }


    // when page loads, get the data from the sevice
    componentDidMount() {
        let service = new ClassService();
        let data = service.getClassesLocal();
        console.log("all classes", data);

        this.setState({ allClasses: data });
    }
}

export default ClassPage;