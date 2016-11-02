import React, {PropTypes} from 'react';
import {Messages} from '../../api/messages/messages.js';
import {createContainer} from 'meteor/react-meteor-data';
import ChatFooter from './chatFooter.jsx';
import ChatBoxBody from './ChatBoxBody';

export default class ChatBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Ryan'
        };
        this.setNickName = this.setNickName.bind(this);
    }
    render() {
        return (
            <div className="chat-wrapper full-height row">
                <nav className="navbar navbar-light bg-faded chat-nav">
                    <h1 className="navbar-brand mb-0">{this.props.room}</h1>
                </nav>
                <ChatBoxBody messages={this.props.messages}/>
                <div className="chat-footer">
                    <ChatFooter nickName={this.state.name} room={this.props.room}/>
                </div>
                {/* <NameModal nameSet={this.setNickName}/> */}
            </div>
        )
    }
    setNickName(value) {
        this.setState({name: value});
    }
}

ChatBox.propTypes = {
    messages: PropTypes.array.isRequired
};

export default createContainer((params) => {
    return {
        messages: Messages.find({room: params.room}, { sort: { createdAt: 1 } }).fetch()
    }
}, ChatBox);
