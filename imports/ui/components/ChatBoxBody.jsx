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
            <div className="chat-body">
                {pinnedMessage !== undefined &&
                    <div className="alert alert-info" role="alert">
                      <strong>{pinnedMessage.name}</strong> {pinnedMessage.text}
                    </div>
                }
                <MessageList messages={this.props.messages}/>
            </div>
        )
    }
}
