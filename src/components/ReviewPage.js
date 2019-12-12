import React from 'react';
import { getReviewsJson } from '../utils/JsonFileUtil';
import { ReviewList } from './ReviewList';
import { ReviewDetails } from './ReviewDetails';

export class ReviewPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviews: getReviewsJson(),
            isListView: true,
            reviewId: null
        }
    }

    displayReviewDetails = (reviewId) => {
        this.setState({
            isListView: false,
            reviewId
        });
    }

    displayReviewList = () => {
        this.setState({
            isListView: true
        });
    }

    displayReview = () => {
        if (this.state.isListView) {
            return <ReviewList reviews={this.state.reviews} displayReviewDetails={this.displayReviewDetails} />;
        } else {
            return <ReviewDetails review={this.state.reviews[this.state.reviewId]} displayReviewList={this.displayReviewList} />;
        }
    }

    render() {
        return (
            <div className="reviews-container">
                {this.displayReview()}
            </div>
        );
    }
}