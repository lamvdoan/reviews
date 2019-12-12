import React from 'react';
import { Review } from './Review';

export class ReviewList extends React.Component {
    getReviews = () => (
        <div className="reviews-table">
            <table>
                <tbody>
                    {this.getRowsOfThreeReviews()}
                </tbody>
            </table>
        </div>
    );

    getRowsOfThreeReviews = () => {
        let indexes = [];
        for (let i = 0; i < this.props.reviews.length; i++) {
            indexes.push(i);
        }

        let row = [];
        const reviews = indexes.reduce((acc, index) => {
            row.push(this.getReviewInTd(index));

            if (index % 3 === 2) {
                acc.push(this.getTr(index, row));
                row = [];
            }

            return acc;
        }, []);
        reviews.push(this.getTr("last", row));

        return reviews;
    };

    getTr = (index, row) => (
        <tr key={index} className="row">{row}</tr>
    );

    getReviewInTd = (index) => (
        <td key={index} onClick={() => this.handleClick(index)}>
            <Review key={index} id={index} review={this.props.reviews[index]} />
        </td>
    );
    
    handleClick = (reviewId) => {
        this.props.displayReviewDetails(reviewId);
    }

    render() {
        return (
            <div>
                {this.getReviews()}
            </div>
        );
    }
}