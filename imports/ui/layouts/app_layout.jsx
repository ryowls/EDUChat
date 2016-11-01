import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from '../components/navbar'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {content} = this.props

        return (
            <MuiThemeProvider>
                <div className="full-height">
                    {/* <nav className="navbar navbar-full navbar-dark bg-inverse">
                        <a className="navbar-brand" href="#">Project name</a>
                        <ul className="nav navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </nav> */}
                    <div className='container full-height'>
                        {content}
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}
