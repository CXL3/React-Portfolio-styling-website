import React from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';


class Header extends React.Component {


    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>SlimStyle</h1>
                                <h2>Helping you look slimmer and taller</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top">
                    <div className="container">
                        <NavbarBrand href="/">SlimStyle</NavbarBrand>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

 
export default Header;