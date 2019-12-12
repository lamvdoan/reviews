import React from 'react';
import { Review } from './Review';
import { Response } from './Response';

export class ReviewDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: props.review
        }
    }

    goBack = () => {
        this.props.displayReviewList();
    }

    getResponse = () => {
        return (
            <Response />
        );
    }
    
    getReview = () => (
        <Review review={this.props.review} />
    );

    render() {
        return (
            <div>
                <div className="button-back" onClick={this.goBack}>
                    Back
                </div>
                <div className="reviews-table">
                    <table>
                        <tbody>
                            <tr className="row">
                                <td>
                                    {this.getReview()}
                                </td>
                            </tr>
                            <tr className="row">
                                <td>
                                    {this.getResponse()}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}