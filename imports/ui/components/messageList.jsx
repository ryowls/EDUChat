import React, {PropTypes} from 'react';
import Message from './message.jsx'

export default class MessageList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div ref="messageList"  className="message-list">
                <ul className="list-striped">
                    {this.props.messages.map((message) => (<Message key={message._id} message={message}/>))}
                </ul>
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
