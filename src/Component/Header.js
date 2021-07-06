import React from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>Styling</h1>
                                <h2>Helping you look slimmer and taller</h2>
                            </div>
                            <div>
                                <Navbar dark color="primary">
                                    <div className="container">
                                        <NavbarBrand href="/">NuCamp</NavbarBrand>
                                    </div>
                                </Navbar>
                            </div>      
                        </div>
                    </div>
                </Jumbotron>
                
                <div className="App">
                    <Navbar dark color="dark">
                        <div className="container">
                            <NavbarBrand href="/">Extract my true beauty</NavbarBrand>
                        </div>
                    </Navbar>
                </div>
            </React.Fragment>
        );
    }
}

 
export default Header;