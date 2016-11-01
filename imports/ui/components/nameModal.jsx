import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    InputGroup,
    InputGroupAddon,
    Input
} from 'reactstrap';

export default class NameModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    componentDidMount() {
        this.toggle();
    }
    handleKeyPress(event) {
      {/* Add some simple verification for length*/}
        if (event.charCode == 13) {
          const text = ReactDOM.findDOMNode(this.refs.nameInput).value.trim();
          this.props.nameSet(text);
          this.toggle();
        }
    }
    render() {
        return (
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Enter a nickname</ModalHeader>
                <ModalBody>
                    <InputGroup>
                        <InputGroupAddon>@</InputGroupAddon>
                        <Input ref="nameInput" placeholder="username" onKeyPress={this.handleKeyPress}/>
                    </InputGroup>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>Set Name</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}
