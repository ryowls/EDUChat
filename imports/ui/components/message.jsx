import React, {Component, PropTypes} from 'react';

export default class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className="media message-striped message">
                <div className="media-body">
                    <h4 className="media-heading">{this.props.message.name}
                        <small className="text-muted">
                            &nbsp;{moment(this.props.message.createdAt).calendar()}</small>
                    </h4>
                    {this.props.message.text}
                </div>
                <a className="media-right media-middle" href="#">
                    {/* <i className="fa fa-exclamation fa-lg"></i> */}
                </a>
            </li>
        )
    }
}
