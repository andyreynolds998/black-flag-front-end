import React, { Component } from 'react';
import './faq.css';

class Faq extends React.Component {
    render() {
        return <div className="faq">
            <h2 className="faqQ" src={this.props.data.question}></h2>
            <p className="faqA" src={this.props.data.answer}></p>
        </div>;
    }
}

export default Faq;

