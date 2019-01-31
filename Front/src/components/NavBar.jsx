import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
} from 'reactstrap';
import './NavBar.scss';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => (
      { isOpen: !(prevState.isOpen) }
    ));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="NavBar">
        <Navbar dark expand="md" className="pl-lg-5 pr-lg-5 pl-md-2 pr-md-2">
          <NavbarBrand className="mr-1 pt-0" href="/">
            <span>Le Droit à la Déconnexion</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/">Accueil</Link>
              </NavItem>
              <NavItem>
                <Link to="/laisser-un-avis">Laisser un avis</Link>
              </NavItem>
              <NavItem>
                <Link to="/compte-entreprise">Compte Entreprise</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
