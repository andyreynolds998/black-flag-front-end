import React, { Component } from 'react';
import './class.css';
class Class extends React.Component {
    render() {
        return <div className="class">
            <img className="classIMG" src={this.props.class.image} alt="classIMG" />

            <h2 className="classTitle">{this.props.prod.title}</h2>

            <p className="classDesc">
                {this.props.prod.desc}
            </p>
        </div>;
    }
}

export default Class;
