import React from 'react';

export class Review extends React.Component {
    getRatingImage = () => {
        const stars = [];
        for (let i = 0; i < this.props.review.rating; i++) {
            stars.push(<span key={i}><img src={"/images/yellow-star.png"} /></span>);
        }

        return stars;
    }

    render() {
        return (
            <div className="review-cell">
                <div className="review-cell-top">
                    <div className="review__place">{this.props.review.place}</div>
                    <div key="image" className="">{this.getRatingImage()}</div>
                    <br></br>
                    <div className="review__content">{this.props.review.content}</div>
                </div>
                <div className="review-cell-bottom">
                    <span className="review__author">{this.props.review.author}</span>  
                    <span className="review__published_at">{new Date(this.props.review.published_at).toLocaleDateString('en-US')}</span>
                </div>
            </div>
        );
    }
}