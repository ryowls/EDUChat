import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
const Logged = (props) => (
    <IconMenu {...props} iconButtonElement={< IconButton > <MoreVertIcon/> < /IconButton>} targetOrigin={{
        horizontal: 'right',
        vertical: 'top'
    }} anchorOrigin={{
        horizontal: 'right',
        vertical: 'top'
    }}>
        <MenuItem primaryText="Refresh"/>
        <MenuItem primaryText="Help"/>
        <MenuItem primaryText="Sign out"/>
    </IconMenu>
);
export default class NavBar extends React.Component {

    render() {
        return (< AppBar title = "Test Header" iconElementRight = { < Logged />
        } />)
    }
}
