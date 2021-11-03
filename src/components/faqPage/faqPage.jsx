import React, { Component } from 'react';
import './faqPage.css';

//components
import Faq from './../faq/faq';
import FaqService from './../../Services/faqService';


class FaqPage extends React.Component {
    state = {
        allFaqs: []
    }

    render() {
        return <div className="faqPage">
            {this.state.allFaqs.map(fObject => <Faq data={fObject}></Faq>)}
        </div>;
    }

    componentDidMount() {
        let service = new FaqService();
        let data = service.getFaqLocal();
        console.log("all questions", data);

        this.setState({ allFaqs: data });
    }
}

export default FaqPage;