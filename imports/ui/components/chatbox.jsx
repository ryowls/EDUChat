import React, {PropTypes} from 'react';
import {Messages} from '../../api/messages/messages.js';
import {createContainer} from 'meteor/react-meteor-data';
import ChatFooter from './chatFooter.jsx';
import MessageList from './messageList.jsx';

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
                <div className="chat-body" ref="messageList">
                    <MessageList messages={this.props.messages}/>
                </div>
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
    componentWillUpdate() {
        {/* Determines if the user is close enough to the bottom to warrant
          keeping the scroll locked. 10 Pixels gives a little leeway*/
        }
        this.shouldScrollBottom = Math.abs((this.refs.messageList.scrollTop + this.refs.messageList.offsetHeight) - this.refs.messageList.scrollHeight) <= 10
    }
    componentDidUpdate() {
        {/* shouldScrollBottom doesn't need to be stored in state in order to
        prevent any re-rendering.*/
        }
        if (this.shouldScrollBottom) {
            this.refs.messageList.scrollTop = this.refs.messageList.scrollHeight;
        }
    }
}

ChatBox.propTypes = {
    messages: PropTypes.array.isRequired
};

export default createContainer((params) => {
    return {
        messages: Messages.find({room: params.room}).fetch()
    }
}, ChatBox);
