import React, {PropTypes} from 'react';
import Message from './message.jsx'

export default class MessageList extends React.Component {
  constructor(props){
      super(props);
  }
  render() {
      const pinnedMessage = _.find(this.props.messages, function(message) {
         return message.pinned == true;
      });

      return (
          <div>
              {/*{pinnedMessage !== undefined &&*/}
                {/*/!*<Message message={pinnedMessage}/>*!/*/}
              {/*}*/}
              <ul className="list-group list-striped">
                  {this.props.messages.map((message) => (<Message key={message._id} message={message}/>))}
              </ul>
          </div>
      )
  }
}
