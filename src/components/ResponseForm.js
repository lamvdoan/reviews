import React from 'react';

export class ResponseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: "",
            commenter: "",
            date: undefined,
            error: ""
        };
    }

    commenterHandleChange = (event) => {
        this.setState({
            commenter: event.target.value
        });
    }

    commentHandleChange = (event) => {
        this.setState({
            comment: event.target.value
        });
    }

    handleSubmit = (event) => {
        if (!this.state.comment) {
            this.setState({ error: "Response field is empty.  Please fill in a response." });
        } else {
            const today = new Date();

            this.props.handleSubmit({
                comment: this.state.comment,
                commenter: this.state.commenter || "anonymous",
                date: today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear()
            });
        }

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    {this.state.error && <p className="form__error">{this.state.error}</p>}

                    <label>
                        <input 
                            className="text-input" 
                            type="text" 
                            value={this.state.commenter} 
                            placeholder="Name"
                            onChange={this.commenterHandleChange} 
                        />
                    </label>

                    <label>
                        <textarea 
                            className="text-area" 
                            type="text" 
                            value={this.state.comment} 
                            placeholder="Comment"
                            onChange={this.commentHandleChange} 
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}