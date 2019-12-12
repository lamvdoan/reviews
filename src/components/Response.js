import React from 'react';
import { ResponseForm } from './ResponseForm';

export class Response extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: {
                comment: "",
                commenter: "",
                date: undefined
            }
        }
    }

    handleSubmit = ({ comment, commenter, date }) => {
        this.setState({
            response: {
                comment,
                commenter,
                date
            }
        });
    }

    displayResponseOrEditForm = () => {
        if (this.state.response.date) {
            return this.displayResponse();
        } else {
            return this.displayEditResponse();
        }
    }

    displayResponse = () => (
        <div className="response-cell">
            <div className="review-cell-top">
                {this.state.response.comment}
            </div>
            <div className="review-cell-bottom">
                <span className="review__author">{this.state.response.commenter}</span>
                <span className="review__published_at">{this.state.response.date}</span>
            </div>
        </div>
    );

    displayEditResponse = () => (
        <ResponseForm response={this.state.response} handleSubmit={this.handleSubmit} />
    );

    render() {
        return (
            <div>
                {this.displayResponseOrEditForm()}
            </div>
        );
    }
}