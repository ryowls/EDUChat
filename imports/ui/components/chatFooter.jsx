import React from 'react'
import ReactDOM from 'react-dom';
import { Messages } from '../../api/messages/messages.js';

export default class ChatFooter extends React.Component {
    render() {
        return (
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Message..." ref="textInput" onKeyPress={this.handleKeyPress.bind(this)}/>
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button">Send</button>
                </span>
            </div>
        )
    }
    handleKeyPress(event) {
        if (event.charCode == 13) {
          const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
          Messages.insert({
            text,
            name : this.props.nickName,
            room: this.props.room
          });

          ReactDOM.findDOMNode(this.refs.textInput).value = '';

        }
    }
}
