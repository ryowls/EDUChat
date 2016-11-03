import React, {PropTypes} from 'react';
import Message from './message.jsx'

export default class MessageList extends React.Component {
  constructor(props){
      super(props);
  }
  render() {
      return (
          <div>
              <ul className="message-list list-group list-striped">
                  {this.props.messages.map((message) => (<Message key={message._id} message={message}/>))}
              </ul>
          </div>
      )
  }
}
