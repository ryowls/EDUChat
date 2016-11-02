import React, {PropTypes} from 'react';
import MessageList from './messageList.jsx';

export default class ChatBoxBody extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const pinnedMessage = _.find(this.props.messages, function(message) {
            return message.pinned == true;
        });
        return (
            <div className="chat-body" ref="messageList">
                {pinnedMessage !== undefined &&
                    <p> {pinnedMessage.text}</p>
                }
                <MessageList messages={this.props.messages}/>
            </div>
        )
    }
    componentWillUpdate() {
        {/* Determines if the user is close enough to the bottom to warrant
         keeping the scroll locked. 10 Pixels gives a little leeway*/
        }
        this.shouldScrollBottom = Math.abs((this.refs.messageList.scrollTop + this.refs.messageList.offsetHeight) - this.refs.messageList.scrollHeight) <= 10
    }
    componentDidUpdate() {
        {/* shouldScrollBottom doesn't need to be stored in state in order to
         prevent any sort of re-rendering.*/
        }
        if (this.shouldScrollBottom) {
            this.refs.messageList.scrollTop = this.refs.messageList.scrollHeight;
        }
    }

}