import React, {Component, PropTypes} from 'react';

export default class Message extends React.Component {
    render() {
        return (
            <ul className="list-group-item">
                <div className="message-wrapper">
                    <div className="media">
                        <div className="media-body">
                            <h4 className="media-heading">{this.props.message.name}
                                <small className="text-muted">
                                    &nbsp;{moment(this.props.message.createdAt).calendar()}</small>
                            </h4>
                            {this.props.message.text}
                        </div>
                        <a className="media-right media-middle" href="#">
                            <i className="fa fa-exclamation fa-lg"></i>
                        </a>
                    </div>
                </div>
            </ul>
        )
    }
}
